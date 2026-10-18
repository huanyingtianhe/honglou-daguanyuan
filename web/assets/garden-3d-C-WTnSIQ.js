import{i as Tl,n as El,r as wl,t as Al}from"./index-BS0dK5ts.js";var Ri=Tl(wl(),1),vr=1e3,hi=1001,Ba=1002,Nt=1003,Rl=1004,Cl=1005,Ft=1006,Pl=1007,za=1008,_i=1009,Ll=1010,Nl=1011,Kn=1012,Il=1013,Ci=1014,qr=1015,xi=1016,$n=1017,Qn=1018,es=1020,Ul=35902,Dl=35899,Ol=1021,Fl=1022,_r=1023,xr=1026,ts=1027,Bl=1028,is=1029,Yr=1030,rs=1031,as=1033,zl=33776,Vl=33777,kl=33778,Hl=33779,Gl=35840,Wl=35841,Xl=35842,jl=35843,ql=36196,Yl=37492,Zl=37496,Jl=37488,Kl=37489,$l=37490,Ql=37491,eh=37808,th=37809,ih=37810,rh=37811,ah=37812,nh=37813,sh=37814,oh=37815,lh=37816,hh=37817,ch=37818,uh=37819,dh=37820,ph=37821,fh=36492,mh=36494,gh=36495,vh=36283,_h=36284,xh=36285,Sh=36286,Zr=2300,Va=2301,ka=2302,ns=2303,ss=2400,os=2401,ls=2402,Mh=3200,hs=3201,ft="srgb",Ha="srgb-linear",Jr="linear",Kr="srgb",Ga=7680,yh=35044,Gi=2e3;function bh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Th(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function $r(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Eh(){let e=$r("canvas");return e.style.display="block",e}var cs={},Wi=null;function us(...e){let t="THREE."+e.shift();Wi?Wi("log",t,...e):console.log(t,...e)}function ds(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function We(...e){e=ds(e);let t="THREE."+e.shift();if(Wi)Wi("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function je(...e){e=ds(e);let t="THREE."+e.shift();if(Wi)Wi("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Xi(...e){let t=e.join(" ");t in cs||(cs[t]=!0,We(...e))}function wh(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Ah={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Rt="00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."),ps=1234567,Sr=Math.PI/180,Mr=180/Math.PI;function Li(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rt[e&255]+Rt[e>>8&255]+Rt[e>>16&255]+Rt[e>>24&255]+"-"+Rt[t&255]+Rt[t>>8&255]+"-"+Rt[t>>16&15|64]+Rt[t>>24&255]+"-"+Rt[i&63|128]+Rt[i>>8&255]+"-"+Rt[i>>16&255]+Rt[i>>24&255]+Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]).toLowerCase()}function $e(e,t,i){return Math.max(t,Math.min(i,e))}function Wa(e,t){return(e%t+t)%t}function Rh(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function Ch(e,t,i){return e===t?0:(i-e)/(t-e)}function yr(e,t,i){return(1-i)*e+i*t}function Ph(e,t,i,r){return yr(e,t,1-Math.exp(-i*r))}function Lh(e,t=1){return t-Math.abs(Wa(e,t*2)-t)}function Nh(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Ih(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function Uh(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Dh(e,t){return e+Math.random()*(t-e)}function Oh(e){return e*(.5-Math.random())}function Fh(e){e!==void 0&&(ps=e);let t=ps+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bh(e){return e*Sr}function zh(e){return e*Mr}function Vh(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function kh(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Hh(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Gh(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),c=n((t+r)/2),m=s((t+r)/2),x=n((t-r)/2),g=s((t-r)/2),M=n((r-t)/2),S=s((r-t)/2);switch(a){case"XYX":e.set(o*m,l*x,l*g,o*c);break;case"YZY":e.set(l*g,o*m,l*x,o*c);break;case"ZXZ":e.set(l*x,l*g,o*m,o*c);break;case"XZX":e.set(o*m,l*S,l*M,o*c);break;case"YXY":e.set(l*M,o*m,l*S,o*c);break;case"ZYZ":e.set(l*S,l*M,o*m,o*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ji(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function It(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var Ni={DEG2RAD:Sr,RAD2DEG:Mr,generateUUID:Li,clamp:$e,euclideanModulo:Wa,mapLinear:Rh,inverseLerp:Ch,lerp:yr,damp:Ph,pingpong:Lh,smoothstep:Nh,smootherstep:Ih,randInt:Uh,randFloat:Dh,randFloatSpread:Oh,seededRandom:Fh,degToRad:Bh,radToDeg:zh,isPowerOfTwo:Vh,ceilPowerOfTwo:kh,floorPowerOfTwo:Hh,setQuaternionFromProperEuler:Gh,normalize:It,denormalize:ji},Me=class $o{static{$o.prototype.isVector2=!0}constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=$e(this.x,t.x,i.x),this.y=$e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=$e(this.x,t,i),this.y=$e(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos($e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ii=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],c=i[r+2],m=i[r+3],x=a[n+0],g=a[n+1],M=a[n+2],S=a[n+3];if(m!==S||o!==x||l!==g||c!==M){let d=o*x+l*g+c*M+m*S;d<0&&(x=-x,g=-g,M=-M,S=-S,d=-d);let h=1-s;if(d<.9995){let u=Math.acos(d),y=Math.sin(u);h=Math.sin(h*u)/y,s=Math.sin(s*u)/y,o=o*h+x*s,l=l*h+g*s,c=c*h+M*s,m=m*h+S*s}else{o=o*h+x*s,l=l*h+g*s,c=c*h+M*s,m=m*h+S*s;let u=1/Math.sqrt(o*o+l*l+c*c+m*m);o*=u,l*=u,c*=u,m*=u}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],c=i[r+3],m=a[n],x=a[n+1],g=a[n+2],M=a[n+3];return e[t]=s*M+c*m+o*g-l*x,e[t+1]=o*M+c*x+l*m-s*g,e[t+2]=l*M+c*g+s*x-o*m,e[t+3]=c*M-s*m-o*x-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),c=s(r/2),m=s(a/2),x=o(i/2),g=o(r/2),M=o(a/2);switch(n){case"XYZ":this._x=x*c*m+l*g*M,this._y=l*g*m-x*c*M,this._z=l*c*M+x*g*m,this._w=l*c*m-x*g*M;break;case"YXZ":this._x=x*c*m+l*g*M,this._y=l*g*m-x*c*M,this._z=l*c*M-x*g*m,this._w=l*c*m+x*g*M;break;case"ZXY":this._x=x*c*m-l*g*M,this._y=l*g*m+x*c*M,this._z=l*c*M+x*g*m,this._w=l*c*m-x*g*M;break;case"ZYX":this._x=x*c*m-l*g*M,this._y=l*g*m+x*c*M,this._z=l*c*M-x*g*m,this._w=l*c*m+x*g*M;break;case"YZX":this._x=x*c*m+l*g*M,this._y=l*g*m+x*c*M,this._z=l*c*M-x*g*m,this._w=l*c*m-x*g*M;break;case"XZY":this._x=x*c*m-l*g*M,this._y=l*g*m-x*c*M,this._z=l*c*M+x*g*m,this._w=l*c*m+x*g*M;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],m=t[10],x=i+s+m;if(x>0){let g=.5/Math.sqrt(x+1);this._w=.25/g,this._x=(c-o)*g,this._y=(a-l)*g,this._z=(n-r)*g}else if(i>s&&i>m){let g=2*Math.sqrt(1+i-s-m);this._w=(c-o)/g,this._x=.25*g,this._y=(r+n)/g,this._z=(a+l)/g}else if(s>m){let g=2*Math.sqrt(1+s-i-m);this._w=(a-l)/g,this._x=(r+n)/g,this._y=.25*g,this._z=(o+c)/g}else{let g=2*Math.sqrt(1+m-i-s);this._w=(n-r)/g,this._x=(a+l)/g,this._y=(o+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+n*s+r*l-a*o,this._y=r*c+n*o+a*s-i*l,this._z=a*c+n*l+i*o-r*s,this._w=n*c-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class Qo{static{Qo.prototype.isVector3=!0}constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(fs.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(fs.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*r),m=2*(o*i-n*a),x=2*(n*r-s*i);return this.x=i+l*c+s*x-o*m,this.y=r+l*m+o*c-n*x,this.z=a+l*x+n*m-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=$e(this.x,t.x,i.x),this.y=$e(this.y,t.y,i.y),this.z=$e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=$e(this.x,t,i),this.y=$e(this.y,t,i),this.z=$e(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Xa.copy(this).projectOnVector(t),this.sub(Xa)}reflect(t){return this.sub(Xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos($e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xa=new O,fs=new Ii,qe=class el{static{el.prototype.isMatrix3=!0}constructor(t,i,r,a,n,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c)}set(t,i,r,a,n,s,o,l,c){let m=this.elements;return m[0]=t,m[1]=a,m[2]=o,m[3]=i,m[4]=n,m[5]=l,m[6]=r,m[7]=s,m[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],m=r[4],x=r[7],g=r[2],M=r[5],S=r[8],d=a[0],h=a[3],u=a[6],y=a[1],b=a[4],p=a[7],T=a[2],v=a[5],R=a[8];return n[0]=s*d+o*y+l*T,n[3]=s*h+o*b+l*v,n[6]=s*u+o*p+l*R,n[1]=c*d+m*y+x*T,n[4]=c*h+m*b+x*v,n[7]=c*u+m*p+x*R,n[2]=g*d+M*y+S*T,n[5]=g*h+M*b+S*v,n[8]=g*u+M*p+S*R,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],m=t[8];return i*s*m-i*o*c-r*n*m+r*o*l+a*n*c-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],m=t[8],x=m*s-o*c,g=o*l-m*n,M=c*n-s*l,S=i*x+r*g+a*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let d=1/S;return t[0]=x*d,t[1]=(a*c-m*r)*d,t[2]=(o*r-a*s)*d,t[3]=g*d,t[4]=(m*i-a*l)*d,t[5]=(a*n-o*i)*d,t[6]=M*d,t[7]=(r*l-c*i)*d,t[8]=(s*i-r*n)*d,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+i,0,0,1),this}scale(t,i){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ja.makeScale(t,i)),this}rotate(t){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ja.makeRotation(-t)),this}translate(t,i){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ja.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ja=new qe,ms=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gs=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wh(){let e={enabled:!0,workingColorSpace:Ha,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer==="srgb"&&(a.r=ci(a.r),a.g=ci(a.g),a.b=ci(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer==="srgb"&&(a.r=qi(a.r),a.g=qi(a.g),a.b=qi(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===""?Jr:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ha]:{primaries:t,whitePoint:r,transfer:Jr,toXYZ:ms,fromXYZ:gs,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:t,whitePoint:r,transfer:Kr,toXYZ:ms,fromXYZ:gs,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),e}var it=Wh();function ci(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function qi(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Yi,Xh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yi===void 0&&(Yi=$r("canvas")),Yi.width=e.width,Yi.height=e.height;let r=Yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$r("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=ci(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jh=0,qa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Ya(r[n].image)):a.push(Ya(r[n]))}else a=Ya(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Ya(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Xh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var qh=0,Za=new O,Ht=class Ua extends Pi{constructor(t=Ua.DEFAULT_IMAGE,i=Ua.DEFAULT_MAPPING,r=hi,a=hi,n=Ft,s=za,o=_r,l=_i,c=Ua.DEFAULT_ANISOTROPY,m=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Li(),this.name="",this.source=new qa(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Za).x}get height(){return this.source.getSize(Za).y}get depth(){return this.source.getSize(Za).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){We(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){We(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x-=Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x-=Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y-=Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y-=Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null,Ht.DEFAULT_MAPPING=300,Ht.DEFAULT_ANISOTROPY=1;var St=class tl{static{tl.prototype.isVector4=!0}constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w===void 0?1:t.w,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=.01,o=.1,l=t.elements,c=l[0],m=l[4],x=l[8],g=l[1],M=l[5],S=l[9],d=l[2],h=l[6],u=l[10];if(Math.abs(m-g)<s&&Math.abs(x-d)<s&&Math.abs(S-h)<s){if(Math.abs(m+g)<o&&Math.abs(x+d)<o&&Math.abs(S+h)<o&&Math.abs(c+M+u-3)<o)return this.set(1,0,0,0),this;i=Math.PI;let b=(c+1)/2,p=(M+1)/2,T=(u+1)/2,v=(m+g)/4,R=(x+d)/4,f=(S+h)/4;return b>p&&b>T?b<s?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(b),a=v/r,n=R/r):p>T?p<s?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(p),r=v/a,n=f/a):T<s?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(T),r=R/n,a=f/n),this.set(r,a,n,i),this}let y=Math.sqrt((h-S)*(h-S)+(x-d)*(x-d)+(g-m)*(g-m));return Math.abs(y)<.001&&(y=1),this.x=(h-S)/y,this.y=(x-d)/y,this.z=(g-m)/y,this.w=Math.acos((c+M+u-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=$e(this.x,t.x,i.x),this.y=$e(this.y,t.y,i.y),this.z=$e(this.z,t.z,i.z),this.w=$e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=$e(this.x,t,i),this.y=$e(this.y,t,i),this.z=$e(this.z,t,i),this.w=$e(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yh=class extends Pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let r=new Ht({width:e,height:t,depth:i.depth}),a=i.count;for(let n=0;n<a;n++)this.textures[n]=r.clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new qa(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends Yh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},vs=class extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Zh=class extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},mt=class Vn{static{Vn.prototype.isMatrix4=!0}constructor(t,i,r,a,n,s,o,l,c,m,x,g,M,S,d,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c,m,x,g,M,S,d,h)}set(t,i,r,a,n,s,o,l,c,m,x,g,M,S,d,h){let u=this.elements;return u[0]=t,u[4]=i,u[8]=r,u[12]=a,u[1]=n,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=m,u[10]=x,u[14]=g,u[3]=M,u[7]=S,u[11]=d,u[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vn().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Zi.setFromMatrixColumn(t,0).length(),n=1/Zi.setFromMatrixColumn(t,1).length(),s=1/Zi.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),m=Math.cos(n),x=Math.sin(n);if(t.order==="XYZ"){let g=s*m,M=s*x,S=o*m,d=o*x;i[0]=l*m,i[4]=-l*x,i[8]=c,i[1]=M+S*c,i[5]=g-d*c,i[9]=-o*l,i[2]=d-g*c,i[6]=S+M*c,i[10]=s*l}else if(t.order==="YXZ"){let g=l*m,M=l*x,S=c*m,d=c*x;i[0]=g+d*o,i[4]=S*o-M,i[8]=s*c,i[1]=s*x,i[5]=s*m,i[9]=-o,i[2]=M*o-S,i[6]=d+g*o,i[10]=s*l}else if(t.order==="ZXY"){let g=l*m,M=l*x,S=c*m,d=c*x;i[0]=g-d*o,i[4]=-s*x,i[8]=S+M*o,i[1]=M+S*o,i[5]=s*m,i[9]=d-g*o,i[2]=-s*c,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let g=s*m,M=s*x,S=o*m,d=o*x;i[0]=l*m,i[4]=S*c-M,i[8]=g*c+d,i[1]=l*x,i[5]=d*c+g,i[9]=M*c-S,i[2]=-c,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let g=s*l,M=s*c,S=o*l,d=o*c;i[0]=l*m,i[4]=d-g*x,i[8]=S*x+M,i[1]=x,i[5]=s*m,i[9]=-o*m,i[2]=-c*m,i[6]=M*x+S,i[10]=g-d*x}else if(t.order==="XZY"){let g=s*l,M=s*c,S=o*l,d=o*c;i[0]=l*m,i[4]=-x,i[8]=c*m,i[1]=g*x+d,i[5]=s*m,i[9]=M*x-S,i[2]=S*x-M,i[6]=o*m,i[10]=d*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jh,t,Kh)}lookAt(t,i,r){let a=this.elements;return Bt.subVectors(t,i),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Si.crossVectors(r,Bt),Si.lengthSq()===0&&(Math.abs(r.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Si.crossVectors(r,Bt)),Si.normalize(),Qr.crossVectors(Bt,Si),a[0]=Si.x,a[4]=Qr.x,a[8]=Bt.x,a[1]=Si.y,a[5]=Qr.y,a[9]=Bt.y,a[2]=Si.z,a[6]=Qr.z,a[10]=Bt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],m=r[1],x=r[5],g=r[9],M=r[13],S=r[2],d=r[6],h=r[10],u=r[14],y=r[3],b=r[7],p=r[11],T=r[15],v=a[0],R=a[4],f=a[8],_=a[12],A=a[1],w=a[5],L=a[9],U=a[13],N=a[2],F=a[6],j=a[10],W=a[14],ee=a[3],q=a[7],$=a[11],k=a[15];return n[0]=s*v+o*A+l*N+c*ee,n[4]=s*R+o*w+l*F+c*q,n[8]=s*f+o*L+l*j+c*$,n[12]=s*_+o*U+l*W+c*k,n[1]=m*v+x*A+g*N+M*ee,n[5]=m*R+x*w+g*F+M*q,n[9]=m*f+x*L+g*j+M*$,n[13]=m*_+x*U+g*W+M*k,n[2]=S*v+d*A+h*N+u*ee,n[6]=S*R+d*w+h*F+u*q,n[10]=S*f+d*L+h*j+u*$,n[14]=S*_+d*U+h*W+u*k,n[3]=y*v+b*A+p*N+T*ee,n[7]=y*R+b*w+p*F+T*q,n[11]=y*f+b*L+p*j+T*$,n[15]=y*_+b*U+p*W+T*k,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],c=t[13],m=t[2],x=t[6],g=t[10],M=t[14],S=t[3],d=t[7],h=t[11],u=t[15],y=l*M-c*g,b=o*M-c*x,p=o*g-l*x,T=s*M-c*m,v=s*g-l*m,R=s*x-o*m;return i*(d*y-h*b+u*p)-r*(S*y-h*T+u*v)+a*(S*b-d*T+u*R)-n*(S*p-d*v+h*R)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],m=t[10];return i*(s*m-o*c)-r*(n*m-o*l)+a*(n*c-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],m=t[8],x=t[9],g=t[10],M=t[11],S=t[12],d=t[13],h=t[14],u=t[15],y=i*o-r*s,b=i*l-a*s,p=i*c-n*s,T=r*l-a*o,v=r*c-n*o,R=a*c-n*l,f=m*d-x*S,_=m*h-g*S,A=m*u-M*S,w=x*h-g*d,L=x*u-M*d,U=g*u-M*h,N=y*U-b*L+p*w+T*A-v*_+R*f;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/N;return t[0]=(o*U-l*L+c*w)*F,t[1]=(a*L-r*U-n*w)*F,t[2]=(d*R-h*v+u*T)*F,t[3]=(g*v-x*R-M*T)*F,t[4]=(l*A-s*U-c*_)*F,t[5]=(i*U-a*A+n*_)*F,t[6]=(h*p-S*R-u*b)*F,t[7]=(m*R-g*p+M*b)*F,t[8]=(s*L-o*A+c*f)*F,t[9]=(r*A-i*L-n*f)*F,t[10]=(S*v-d*p+u*y)*F,t[11]=(x*p-m*v-M*y)*F,t[12]=(o*_-s*w-l*f)*F,t[13]=(i*w-r*_+a*f)*F,t[14]=(d*b-S*T-h*y)*F,t[15]=(m*T-x*b+g*y)*F,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,c=n*s,m=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,m*o+r,m*l-a*s,0,c*l-a*o,m*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,c=n+n,m=s+s,x=o+o,g=n*c,M=n*m,S=n*x,d=s*m,h=s*x,u=o*x,y=l*c,b=l*m,p=l*x,T=r.x,v=r.y,R=r.z;return a[0]=(1-(d+u))*T,a[1]=(M+p)*T,a[2]=(S-b)*T,a[3]=0,a[4]=(M-p)*v,a[5]=(1-(g+u))*v,a[6]=(h+y)*v,a[7]=0,a[8]=(S+b)*R,a[9]=(h-y)*R,a[10]=(1-(g+d))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=Zi.set(a[0],a[1],a[2]).length(),o=Zi.set(a[4],a[5],a[6]).length(),l=Zi.set(a[8],a[9],a[10]).length();n<0&&(s=-s),Yt.copy(this);let c=1/s,m=1/o,x=1/l;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=m,Yt.elements[5]*=m,Yt.elements[6]*=m,Yt.elements[8]*=x,Yt.elements[9]*=x,Yt.elements[10]*=x,i.setFromRotationMatrix(Yt),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=Gi,l=!1){let c=this.elements,m=2*n/(i-t),x=2*n/(r-a),g=(i+t)/(i-t),M=(r+a)/(r-a),S,d;if(l)S=n/(s-n),d=s*n/(s-n);else if(o===2e3)S=-(s+n)/(s-n),d=-2*s*n/(s-n);else if(o===2001)S=-s/(s-n),d=-s*n/(s-n);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=m,c[4]=0,c[8]=g,c[12]=0,c[1]=0,c[5]=x,c[9]=M,c[13]=0,c[2]=0,c[6]=0,c[10]=S,c[14]=d,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=Gi,l=!1){let c=this.elements,m=2/(i-t),x=2/(r-a),g=-(i+t)/(i-t),M=-(r+a)/(r-a),S,d;if(l)S=1/(s-n),d=s/(s-n);else if(o===2e3)S=-2/(s-n),d=-(s+n)/(s-n);else if(o===2001)S=-1/(s-n),d=-n/(s-n);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=m,c[4]=0,c[8]=0,c[12]=g,c[1]=0,c[5]=x,c[9]=0,c[13]=M,c[2]=0,c[6]=0,c[10]=S,c[14]=d,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Zi=new O,Yt=new mt,Jh=new O(0,0,0),Kh=new O(1,1,1),Si=new O,Qr=new O,Bt=new O,_s=new mt,xs=new Ii,Ji=class il{constructor(t=0,i=0,r=0,a=il.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],m=a[9],x=a[2],g=a[6],M=a[10];switch(i){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(g,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(o,M),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-x,n),this._z=0);break;case"ZXY":this._x=Math.asin($e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-$e(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,c),this._y=Math.atan2(-x,n)):(this._x=0,this._y=Math.atan2(o,M));break;case"XZY":this._z=Math.asin(-$e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(g,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-m,M),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return _s.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_s,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return xs.setFromEuler(this),this.setFromQuaternion(xs,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ji.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},$h=0,Ms=new O,Ki=new Ii,ui=new mt,ea=new O,br=new O,Qh=new O,ec=new Ii,ys=new O(1,0,0),bs=new O(0,1,0),Ts=new O(0,0,1),Es={type:"added"},tc={type:"removed"},$i={type:"childadded",child:null},Ja={type:"childremoved",child:null},zt=class Da extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Da.DEFAULT_UP.clone();let t=new O,i=new Ji,r=new Ii,a=new O(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new mt},normalMatrix:{value:new qe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Da.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Da.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ki.setFromAxisAngle(t,i),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,i){return Ki.setFromAxisAngle(t,i),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(ys,t)}rotateY(t){return this.rotateOnAxis(bs,t)}rotateZ(t){return this.rotateOnAxis(Ts,t)}translateOnAxis(t,i){return Ms.copy(t).applyQuaternion(this.quaternion),this.position.add(Ms.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ys,t)}translateY(t){return this.translateOnAxis(bs,t)}translateZ(t){return this.translateOnAxis(Ts,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ea.copy(t):ea.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(br,ea,this.up):ui.lookAt(ea,br,this.up),this.quaternion.setFromRotationMatrix(ui),a&&(ui.extractRotation(a.matrixWorld),Ki.setFromRotationMatrix(ui),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(je("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Es),$i.child=t,this.dispatchEvent($i),$i.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(tc),Ja.child=t,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Es),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,Qh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,ec,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,m=l.length;c<m;c++){let x=l[c];n(t.shapes,x)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),m=s(t.images),x=s(t.shapes),g=s(t.skeletons),M=s(t.animations),S=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),m.length>0&&(r.images=m),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),S.length>0&&(r.nodes=S)}return r.object=a,r;function s(o){let l=[];for(let c in o){let m=o[c];delete m.metadata,l.push(m)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot===null?null:t.pivot.clone(),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};zt.DEFAULT_UP=new O(0,1,0),zt.DEFAULT_MATRIX_AUTO_UPDATE=!0,zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var lt=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ic={type:"move"},Ka=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let S of e.hand.values()){let d=t.getJointPose(S,i),h=this._getHandJoint(l,S);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}let c=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],x=c.position.distanceTo(m.position),g=.02,M=.005;l.inputState.pinching&&x>g+M?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&x<=g-M&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ic)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ws={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function $a(e,t,i){return i<0&&(i+=1),i>1&&--i,i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var et=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Wa(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=$a(n,a,e+1/3),this.g=$a(n,a,e),this.b=$a(n,a,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=ft){function i(a){a!==void 0&&parseFloat(a)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let i=ws[e.toLowerCase()];return i===void 0?We("Color: Unknown color "+e):this.setHex(i,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return it.workingToColorSpace(Ct.copy(this),e),Math.round($e(Ct.r*255,0,255))*65536+Math.round($e(Ct.g*255,0,255))*256+Math.round($e(Ct.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Ct.copy(this),t);let i=Ct.r,r=Ct.g,a=Ct.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,c=(s+n)/2;if(s===n)o=0,l=0;else{let m=n-s;switch(l=c<=.5?m/(n+s):m/(2-n-s),n){case i:o=(r-a)/m+(r<a?6:0);break;case r:o=(a-i)/m+2;break;case a:o=(i-r)/m+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=ft){it.workingToColorSpace(Ct.copy(this),e);let t=Ct.r,i=Ct.g,r=Ct.b;return e==="srgb"?`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(ta);let i=yr(Mi.h,ta.h,t),r=yr(Mi.s,ta.s,t),a=yr(Mi.l,ta.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new et;et.NAMES=ws;var rc=class rl{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new et(t),this.near=i,this.far=r}clone(){return new rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},As=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zt=new O,di=new O,Qa=new O,pi=new O,Qi=new O,er=new O,Rs=new O,en=new O,tn=new O,rn=new O,an=new St,nn=new St,sn=new St,Tr=class fr{constructor(t=new O,i=new O,r=new O){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Zt.subVectors(t,i),a.cross(Zt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Zt.subVectors(a,i),di.subVectors(r,i),Qa.subVectors(t,i);let s=Zt.dot(Zt),o=Zt.dot(di),l=Zt.dot(Qa),c=di.dot(di),m=di.dot(Qa),x=s*c-o*o;if(x===0)return n.set(0,0,0),null;let g=1/x,M=(c*l-o*m)*g,S=(s*m-o*l)*g;return n.set(1-M-S,S,M)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,pi.x),l.addScaledVector(s,pi.y),l.addScaledVector(o,pi.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return an.setScalar(0),nn.setScalar(0),sn.setScalar(0),an.fromBufferAttribute(t,i),nn.fromBufferAttribute(t,r),sn.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(an,n.x),s.addScaledVector(nn,n.y),s.addScaledVector(sn,n.z),s}static isFrontFacing(t,i,r,a){return Zt.subVectors(r,i),di.subVectors(t,i),Zt.cross(di).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zt.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Zt.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return fr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return fr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return fr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Qi.subVectors(a,r),er.subVectors(n,r),en.subVectors(t,r);let l=Qi.dot(en),c=er.dot(en);if(l<=0&&c<=0)return i.copy(r);tn.subVectors(t,a);let m=Qi.dot(tn),x=er.dot(tn);if(m>=0&&x<=m)return i.copy(a);let g=l*x-m*c;if(g<=0&&l>=0&&m<=0)return s=l/(l-m),i.copy(r).addScaledVector(Qi,s);rn.subVectors(t,n);let M=Qi.dot(rn),S=er.dot(rn);if(S>=0&&M<=S)return i.copy(n);let d=M*c-l*S;if(d<=0&&c>=0&&S<=0)return o=c/(c-S),i.copy(r).addScaledVector(er,o);let h=m*S-M*x;if(h<=0&&x-m>=0&&M-S>=0)return Rs.subVectors(n,a),o=(x-m)/(x-m+(M-S)),i.copy(a).addScaledVector(Rs,o);let u=1/(h+d+g);return s=d*u,o=g*u,i.copy(r).addScaledVector(Qi,s).addScaledVector(er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Er=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Jt):Jt.fromBufferAttribute(a,n),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox===void 0?(i.boundingBox===null&&i.computeBoundingBox(),ia.copy(i.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),ra.subVectors(this.max,wr),tr.subVectors(e.a,wr),ir.subVectors(e.b,wr),rr.subVectors(e.c,wr),yi.subVectors(ir,tr),bi.subVectors(rr,ir),Ui.subVectors(tr,rr);let t=[0,-yi.z,yi.y,0,-bi.z,bi.y,0,-Ui.z,Ui.y,yi.z,0,-yi.x,bi.z,0,-bi.x,Ui.z,0,-Ui.x,-yi.y,yi.x,0,-bi.y,bi.x,0,-Ui.y,Ui.x,0];return!on(t,tr,ir,rr,ra)||(t=[1,0,0,0,1,0,0,0,1],!on(t,tr,ir,rr,ra))?!1:(aa.crossVectors(yi,bi),t=[aa.x,aa.y,aa.z],on(t,tr,ir,rr,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new O,new O,new O,new O,new O,new O,new O,new O],Jt=new O,ia=new Er,tr=new O,ir=new O,rr=new O,yi=new O,bi=new O,Ui=new O,wr=new O,ra=new O,aa=new O,Di=new O;function on(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Di.fromArray(e,n);let o=a.x*Math.abs(Di.x)+a.y*Math.abs(Di.y)+a.z*Math.abs(Di.z),l=t.dot(Di),c=i.dot(Di),m=r.dot(Di);if(Math.max(-Math.max(l,c,m),Math.min(l,c,m))>o)return!1}return!0}var yt=new O,na=new Me,ac=0,ti=class extends Pi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ac++}),this.name="",this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=i,this.usage=yh,this.updateRanges=[],this.gpuType=qr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array),a=It(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Cs=class extends ti{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Ps=class extends ti{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ye=class extends ti{constructor(e,t,i){super(new Float32Array(e),t,i)}},nc=new Er,Ar=new O,ln=new O,hn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t===void 0?nc.setFromPoints(e).getCenter(i):i.copy(t);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);let t=Ar.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ln.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(ln)),this.expandByPoint(Ar.copy(e.center).sub(ln))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sc=0,Wt=new mt,cn=new zt,ar=new O,Vt=new Er,Rr=new Er,wt=new O,gt=class al extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bh(t)?Ps:Cs)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new qe().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Wt.makeRotationFromQuaternion(t),this.applyMatrix4(Wt),this}rotateX(t){return Wt.makeRotationX(t),this.applyMatrix4(Wt),this}rotateY(t){return Wt.makeRotationY(t),this.applyMatrix4(Wt),this}rotateZ(t){return Wt.makeRotationZ(t),this.applyMatrix4(Wt),this}translate(t,i,r){return Wt.makeTranslation(t,i,r),this.applyMatrix4(Wt),this}scale(t,i,r){return Wt.makeScale(t,i,r),this.applyMatrix4(Wt),this}lookAt(t){return cn.lookAt(t),cn.updateMatrix(),this.applyMatrix4(cn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ye(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Vt.setFromBufferAttribute(n),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let r=this.boundingSphere.center;if(Vt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Vt.min,Rr.min),Vt.expandByPoint(wt),wt.addVectors(Vt.max,Rr.max),Vt.expandByPoint(wt)):(Vt.expandByPoint(Rr.min),Vt.expandByPoint(Rr.max))}Vt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)wt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(wt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let c=0,m=o.count;c<m;c++)wt.fromBufferAttribute(o,c),l&&(ar.fromBufferAttribute(t,c),wt.add(ar)),a=Math.max(a,r.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new ti(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let f=0;f<r.count;f++)o[f]=new O,l[f]=new O;let c=new O,m=new O,x=new O,g=new Me,M=new Me,S=new Me,d=new O,h=new O;function u(f,_,A){c.fromBufferAttribute(r,f),m.fromBufferAttribute(r,_),x.fromBufferAttribute(r,A),g.fromBufferAttribute(n,f),M.fromBufferAttribute(n,_),S.fromBufferAttribute(n,A),m.sub(c),x.sub(c),M.sub(g),S.sub(g);let w=1/(M.x*S.y-S.x*M.y);isFinite(w)&&(d.copy(m).multiplyScalar(S.y).addScaledVector(x,-M.y).multiplyScalar(w),h.copy(x).multiplyScalar(M.x).addScaledVector(m,-S.x).multiplyScalar(w),o[f].add(d),o[_].add(d),o[A].add(d),l[f].add(h),l[_].add(h),l[A].add(h))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let f=0,_=y.length;f<_;++f){let A=y[f],w=A.start,L=A.count;for(let U=w,N=w+L;U<N;U+=3)u(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let b=new O,p=new O,T=new O,v=new O;function R(f){T.fromBufferAttribute(a,f),v.copy(T);let _=o[f];b.copy(_),b.sub(T.multiplyScalar(T.dot(_))).normalize(),p.crossVectors(v,_);let A=p.dot(l[f])<0?-1:1;s.setXYZW(f,b.x,b.y,b.z,A)}for(let f=0,_=y.length;f<_;++f){let A=y[f],w=A.start,L=A.count;for(let U=w,N=w+L;U<N;U+=3)R(t.getX(U+0)),R(t.getX(U+1)),R(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ti(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);let a=new O,n=new O,s=new O,o=new O,l=new O,c=new O,m=new O,x=new O;if(t)for(let g=0,M=t.count;g<M;g+=3){let S=t.getX(g+0),d=t.getX(g+1),h=t.getX(g+2);a.fromBufferAttribute(i,S),n.fromBufferAttribute(i,d),s.fromBufferAttribute(i,h),m.subVectors(s,n),x.subVectors(a,n),m.cross(x),o.fromBufferAttribute(r,S),l.fromBufferAttribute(r,d),c.fromBufferAttribute(r,h),o.add(m),l.add(m),c.add(m),r.setXYZ(S,o.x,o.y,o.z),r.setXYZ(d,l.x,l.y,l.z),r.setXYZ(h,c.x,c.y,c.z)}else for(let g=0,M=i.count;g<M;g+=3)a.fromBufferAttribute(i,g+0),n.fromBufferAttribute(i,g+1),s.fromBufferAttribute(i,g+2),m.subVectors(s,n),x.subVectors(a,n),m.cross(x),r.setXYZ(g+0,m.x,m.y,m.z),r.setXYZ(g+1,m.x,m.y,m.z),r.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)wt.fromBufferAttribute(t,i),wt.normalize(),t.setXYZ(i,wt.x,wt.y,wt.z)}toNonIndexed(){function t(o,l){let c=o.array,m=o.itemSize,x=o.normalized,g=new c.constructor(l.length*m),M=0,S=0;for(let d=0,h=l.length;d<h;d++){M=o.isInterleavedBufferAttribute?l[d]*o.data.stride+o.offset:l[d]*m;for(let u=0;u<m;u++)g[S++]=c[M++]}return new ti(g,m,x)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new al,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,r);i.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let m=0,x=c.length;m<x;m++){let g=c[m],M=t(g,r);l.push(M)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],m=[];for(let x=0,g=c.length;x<g;x++){let M=c[x];m.push(M.toJSON(t.data))}m.length>0&&(a[l]=m,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let m=a[c];this.setAttribute(c,m.clone(i))}let n=t.morphAttributes;for(let c in n){let m=[],x=n[c];for(let g=0,M=x.length;g<M;g++)m.push(x[g].clone(i));this.morphAttributes[c]=m}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,m=s.length;c<m;c++){let x=s[c];this.addGroup(x.start,x.count,x.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=new O,oc=new O,lc=new qe,Ti=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=un.subVectors(i,t).cross(oc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(un),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||lc.getNormalMatrix(e),r=this.coplanarPoint(un).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},hc=0,Cr=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ti().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Me().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mi=new O,dn=new O,sa=new O,oa=new O,cc=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){dn.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),oa.copy(this.origin).sub(dn);let a=e.distanceTo(t)*.5,n=-this.direction.dot(sa),s=oa.dot(this.direction),o=-oa.dot(sa),l=oa.lengthSq(),c=Math.abs(1-n*n),m,x,g,M;if(c>0)if(m=n*o-s,x=n*s-o,M=a*c,m>=0)if(x>=-M)if(x<=M){let S=1/c;m*=S,x*=S,g=m*(m+n*x+2*s)+x*(n*m+x+2*o)+l}else x=a,m=Math.max(0,-(n*x+s)),g=-m*m+x*(x+2*o)+l;else x=-a,m=Math.max(0,-(n*x+s)),g=-m*m+x*(x+2*o)+l;else x<=-M?(m=Math.max(0,-(-n*a+s)),x=m>0?-a:Math.min(Math.max(-a,-o),a),g=-m*m+x*(x+2*o)+l):x<=M?(m=0,x=Math.min(Math.max(-a,-o),a),g=x*(x+2*o)+l):(m=Math.max(0,-(n*a+s)),x=m>0?a:Math.min(Math.max(-a,-o),a),g=-m*m+x*(x+2*o)+l);else x=n>0?-a:a,m=Math.max(0,-(n*x+s)),g=-m*m+x*(x+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(dn).addScaledVector(sa,x),g}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let i=mi.dot(this.direction),r=mi.dot(mi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,c=1/this.direction.y,m=1/this.direction.z,x=this.origin;return l>=0?(i=(e.min.x-x.x)*l,r=(e.max.x-x.x)*l):(i=(e.max.x-x.x)*l,r=(e.min.x-x.x)*l),c>=0?(a=(e.min.y-x.y)*c,n=(e.max.y-x.y)*c):(a=(e.max.y-x.y)*c,n=(e.min.y-x.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),m>=0?(s=(e.min.z-x.z)*m,o=(e.max.z-x.z)*m):(s=(e.max.z-x.z)*m,o=(e.min.z-x.z)*m),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,c=s.z,m=e.x-n.x,x=e.y-n.y,g=e.z-n.z,M=t.x-n.x,S=t.y-n.y,d=t.z-n.z,h=i.x-n.x,u=i.y-n.y,y=i.z-n.z,b=Math.abs(o),p=Math.abs(l),T=Math.abs(c),v,R,f,_,A,w,L,U,N,F,j,W;if(b>=p&&b>=T?(f=o,w=m,N=M,W=h,o>=0?(v=l,R=c,_=x,A=g,L=S,U=d,F=u,j=y):(v=c,R=l,_=g,A=x,L=d,U=S,F=y,j=u)):p>=T?(f=l,w=x,N=S,W=u,l>=0?(v=c,R=o,_=g,A=m,L=d,U=M,F=y,j=h):(v=o,R=c,_=m,A=g,L=M,U=d,F=h,j=y)):(f=c,w=g,N=d,W=y,c>=0?(v=o,R=l,_=m,A=x,L=M,U=S,F=h,j=u):(v=l,R=o,_=x,A=m,L=S,U=M,F=u,j=h)),f===0)return null;let ee=v/f,q=R/f,$=1/f,k=_-ee*w,Te=A-q*w,ge=L-ee*N,Ke=U-q*N,He=F-ee*W,ie=j-q*W,oe=He*Ke-ie*ge,de=k*ie-Te*He,De=ge*Te-Ke*k;if(r){if(oe<0||de<0||De<0)return null}else if((oe<0||de<0||De<0)&&(oe>0||de>0||De>0))return null;let ze=oe+de+De;if(ze===0)return null;let _e=$*(oe*w+de*N+De*W);return(ze>0?_e<0:_e>0)?null:this.at(_e/ze,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pr=class extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ls=new mt,Oi=new cc,la=new hn,Ns=new O,ha=new O,ca=new O,ua=new O,pn=new O,da=new O,Is=new O,pa=new O,st=class extends zt{constructor(e=new gt,t=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){da.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let c=s[o],m=a[o];c!==0&&(pn.fromBufferAttribute(m,e),n?da.addScaledVector(pn,c):da.addScaledVector(pn.sub(t),c))}t.add(da)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(a),Oi.copy(e.ray).recast(e.near),!(la.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(la,Ns)===null||Oi.origin.distanceToSquared(Ns)>(e.far-e.near)**2))&&(Ls.copy(a).invert(),Oi.copy(e.ray).applyMatrix4(Ls),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,m=a.attributes.normal,x=a.groups,g=a.drawRange;if(s!==null)if(Array.isArray(n))for(let M=0,S=x.length;M<S;M++){let d=x[M],h=n[d.materialIndex],u=Math.max(d.start,g.start),y=Math.min(s.count,Math.min(d.start+d.count,g.start+g.count));for(let b=u,p=y;b<p;b+=3){let T=s.getX(b),v=s.getX(b+1),R=s.getX(b+2);r=fa(this,h,e,i,l,c,m,T,v,R),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{let M=Math.max(0,g.start),S=Math.min(s.count,g.start+g.count);for(let d=M,h=S;d<h;d+=3){let u=s.getX(d),y=s.getX(d+1),b=s.getX(d+2);r=fa(this,n,e,i,l,c,m,u,y,b),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let M=0,S=x.length;M<S;M++){let d=x[M],h=n[d.materialIndex],u=Math.max(d.start,g.start),y=Math.min(o.count,Math.min(d.start+d.count,g.start+g.count));for(let b=u,p=y;b<p;b+=3){let T=b,v=b+1,R=b+2;r=fa(this,h,e,i,l,c,m,T,v,R),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{let M=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let d=M,h=S;d<h;d+=3){let u=d,y=d+1,b=d+2;r=fa(this,n,e,i,l,c,m,u,y,b),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}};function uc(e,t,i,r,a,n,s,o){let l;if(l=t.side===1?r.intersectTriangle(s,n,a,!0,o):r.intersectTriangle(a,n,s,t.side===0,o),l===null)return null;pa.copy(o),pa.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(pa);return c<i.near||c>i.far?null:{distance:c,point:pa.clone(),object:e}}function fa(e,t,i,r,a,n,s,o,l,c){e.getVertexPosition(o,ha),e.getVertexPosition(l,ca),e.getVertexPosition(c,ua);let m=uc(e,t,i,r,ha,ca,ua,Is);if(m){let x=new O;Tr.getBarycoord(Is,ha,ca,ua,x),a&&(m.uv=Tr.getInterpolatedAttribute(a,o,l,c,x,new Me)),n&&(m.uv1=Tr.getInterpolatedAttribute(n,o,l,c,x,new Me)),s&&(m.normal=Tr.getInterpolatedAttribute(s,o,l,c,x,new O),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));let g={a:o,b:l,c,normal:new O,materialIndex:0};Tr.getNormal(ha,ca,ua,g.normal),m.face=g,m.barycoord=x}return m}var dc=class extends Ht{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Nt,c=Nt,m,x){super(null,n,s,o,l,c,r,a,m,x),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fi=new hn,pc=new Me(.5,.5),ma=new O,fn=class{constructor(e=new Ti,t=new Ti,i=new Ti,r=new Ti,a=new Ti,n=new Ti){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],m=a[5],x=a[6],g=a[7],M=a[8],S=a[9],d=a[10],h=a[11],u=a[12],y=a[13],b=a[14],p=a[15];if(r[0].setComponents(l-n,g-c,h-M,p-u).normalize(),r[1].setComponents(l+n,g+c,h+M,p+u).normalize(),r[2].setComponents(l+s,g+m,h+S,p+y).normalize(),r[3].setComponents(l-s,g-m,h-S,p-y).normalize(),i)r[4].setComponents(o,x,d,b).normalize(),r[5].setComponents(l-o,g-x,h-d,p-b).normalize();else if(r[4].setComponents(l-o,g-x,h-d,p-b).normalize(),t===2e3)r[5].setComponents(l+o,g+x,h+d,p+b).normalize();else if(t===2001)r[5].setComponents(o,x,d,b).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476+pc.distanceTo(e.center),Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ma.x=r.normal.x>0?e.max.x:e.min.x,ma.y=r.normal.y>0?e.max.y:e.min.y,ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Us=class extends Ht{constructor(e=[],t=301,i,r,a,n,s,o,l,c){super(e,t,i,r,a,n,s,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xt=class extends Ht{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Lr=class extends Ht{constructor(e,t,i=Ci,r,a,n,s=Nt,o=Nt,l,c=xr,m=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:m},r,a,n,s,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fc=class extends Lr{constructor(e,t=Ci,i=301,r,a,n=Nt,s=Nt,o,l=xr){let c={width:e,height:e,depth:1},m=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,s,o,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ds=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pt=class nl extends gt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],c=[],m=[],x=[],g=0,M=0;S("z","y","x",-1,-1,r,i,t,s,n,0),S("z","y","x",1,-1,r,i,-t,s,n,1),S("x","z","y",1,1,t,r,i,a,s,2),S("x","z","y",1,-1,t,r,-i,a,s,3),S("x","y","z",1,-1,t,i,r,a,n,4),S("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(m,3)),this.setAttribute("uv",new Ye(x,2));function S(d,h,u,y,b,p,T,v,R,f,_){let A=p/R,w=T/f,L=p/2,U=T/2,N=v/2,F=R+1,j=f+1,W=0,ee=0,q=new O;for(let $=0;$<j;$++){let k=$*w-U;for(let Te=0;Te<F;Te++)q[d]=(Te*A-L)*y,q[h]=k*b,q[u]=N,c.push(q.x,q.y,q.z),q[d]=0,q[h]=0,q[u]=v>0?1:-1,m.push(q.x,q.y,q.z),x.push(Te/R),x.push(1-$/f),W+=1}for(let $=0;$<f;$++)for(let k=0;k<R;k++){let Te=g+k+F*$,ge=g+k+F*($+1),Ke=g+(k+1)+F*($+1),He=g+(k+1)+F*$;l.push(Te,ge,He),l.push(ge,Ke,He),ee+=6}o.addGroup(M,ee,_),M+=ee,g+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},at=class sl extends gt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),n=Math.floor(n);let m=[],x=[],g=[],M=[],S=0,d=[],h=r/2,u=0;y(),s===!1&&(t>0&&b(!0),i>0&&b(!1)),this.setIndex(m),this.setAttribute("position",new Ye(x,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(M,2));function y(){let p=new O,T=new O,v=0,R=(i-t)/r;for(let f=0;f<=n;f++){let _=[],A=f/n,w=A*(i-t)+t;for(let L=0;L<=a;L++){let U=L/a,N=U*l+o,F=Math.sin(N),j=Math.cos(N);T.x=w*F,T.y=-A*r+h,T.z=w*j,x.push(T.x,T.y,T.z),p.set(F,R,j).normalize(),g.push(p.x,p.y,p.z),M.push(U,1-A),_.push(S++)}d.push(_)}for(let f=0;f<a;f++)for(let _=0;_<n;_++){let A=d[_][f],w=d[_+1][f],L=d[_+1][f+1],U=d[_][f+1];(t>0||_!==0)&&(m.push(A,w,U),v+=3),(i>0||_!==n-1)&&(m.push(w,L,U),v+=3)}c.addGroup(u,v,0),u+=v}function b(p){let T=S,v=new Me,R=new O,f=0,_=p===!0?t:i,A=p===!0?1:-1;for(let L=1;L<=a;L++)x.push(0,h*A,0),g.push(0,A,0),M.push(.5,.5),S++;let w=S;for(let L=0;L<=a;L++){let U=L/a*l+o,N=Math.cos(U),F=Math.sin(U);R.x=_*F,R.y=h*A,R.z=_*N,x.push(R.x,R.y,R.z),g.push(0,A,0),v.x=N*.5+.5,v.y=F*.5*A+.5,M.push(v.x,v.y),S++}for(let L=0;L<a;L++){let U=T+L,N=w+L;p===!0?m.push(N,N+1,U):m.push(N+1,N,U),f+=3}c.addGroup(u,f,p===!0?1:2),u+=f}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ga=class ol extends at{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new ol(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Os=class ll extends gt{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),c(r),m(),this.setAttribute("position",new Ye(n,3)),this.setAttribute("normal",new Ye(n.slice(),3)),this.setAttribute("uv",new Ye(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new O,p=new O,T=new O;for(let v=0;v<i.length;v+=3)M(i[v+0],b),M(i[v+1],p),M(i[v+2],T),l(b,p,T,y)}function l(y,b,p,T){let v=T+1,R=[];for(let f=0;f<=v;f++){R[f]=[];let _=y.clone().lerp(p,f/v),A=b.clone().lerp(p,f/v),w=v-f;for(let L=0;L<=w;L++)L===0&&f===v?R[f][L]=_:R[f][L]=_.clone().lerp(A,L/w)}for(let f=0;f<v;f++)for(let _=0;_<2*(v-f)-1;_++){let A=Math.floor(_/2);_%2==0?(g(R[f][A+1]),g(R[f+1][A]),g(R[f][A])):(g(R[f][A+1]),g(R[f+1][A+1]),g(R[f+1][A]))}}function c(y){let b=new O;for(let p=0;p<n.length;p+=3)b.x=n[p+0],b.y=n[p+1],b.z=n[p+2],b.normalize().multiplyScalar(y),n[p+0]=b.x,n[p+1]=b.y,n[p+2]=b.z}function m(){let y=new O;for(let b=0;b<n.length;b+=3){y.x=n[b+0],y.y=n[b+1],y.z=n[b+2];let p=h(y)/2/Math.PI+.5,T=u(y)/Math.PI+.5;s.push(p,1-T)}S(),x()}function x(){for(let y=0;y<s.length;y+=6){let b=s[y+0],p=s[y+2],T=s[y+4];Math.max(b,p,T)>.9&&Math.min(b,p,T)<.1&&(b<.2&&(s[y+0]+=1),p<.2&&(s[y+2]+=1),T<.2&&(s[y+4]+=1))}}function g(y){n.push(y.x,y.y,y.z)}function M(y,b){let p=y*3;b.x=t[p+0],b.y=t[p+1],b.z=t[p+2]}function S(){let y=new O,b=new O,p=new O,T=new O,v=new Me,R=new Me,f=new Me;for(let _=0,A=0;_<n.length;_+=9,A+=6){y.set(n[_+0],n[_+1],n[_+2]),b.set(n[_+3],n[_+4],n[_+5]),p.set(n[_+6],n[_+7],n[_+8]),v.set(s[A+0],s[A+1]),R.set(s[A+2],s[A+3]),f.set(s[A+4],s[A+5]),T.copy(y).add(b).add(p).divideScalar(3);let w=h(T);d(v,A+0,y,w),d(R,A+2,b,w),d(f,A+4,p,w)}}function d(y,b,p,T){T<0&&y.x===1&&(s[b]=y.x-1),p.x===0&&p.z===0&&(s[b]=T/2/Math.PI+.5)}function h(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.vertices,t.indices,t.radius,t.detail)}},mc=class hl extends Os{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a];super(n,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new hl(t.radius,t.detail)}},ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;n=t||e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let c=i[r],m=i[r+1]-c,x=(n-c)/m;return(r+x)/(a-1)}getTangent(e,t){let i=1e-4,r=e-i,a=e+i;r<0&&(r=0),a>1&&(a=1);let n=this.getPoint(r),s=this.getPoint(a),o=t||(n.isVector2?new Me:new O);return o.copy(s).sub(n).normalize(),o}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new O,r=[],a=[],n=[],s=new O,o=new mt;for(let g=0;g<=e;g++){let M=g/e;r[g]=this.getTangentAt(M,new O)}a[0]=new O,n[0]=new O;let l=Number.MAX_VALUE,c=Math.abs(r[0].x),m=Math.abs(r[0].y),x=Math.abs(r[0].z);c<=l&&(l=c,i.set(1,0,0)),m<=l&&(l=m,i.set(0,1,0)),x<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let g=1;g<=e;g++){if(a[g]=a[g-1].clone(),n[g]=n[g-1].clone(),s.crossVectors(r[g-1],r[g]),s.length()>2**-52){s.normalize();let M=Math.acos($e(r[g-1].dot(r[g]),-1,1));a[g].applyMatrix4(o.makeRotationAxis(s,M))}n[g].crossVectors(r[g],a[g])}if(t===!0){let g=Math.acos($e(a[0].dot(a[e]),-1,1));g/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(g=-g);for(let M=1;M<=e;M++)a[M].applyMatrix4(o.makeRotationAxis(r[M],g*M)),n[M].crossVectors(r[M],a[M])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mn=class extends ii{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new Me){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<2**-52;for(;a<0;)a+=r;for(;a>r;)a-=r;a<2**-52&&(a=n?0:r),this.aClockwise===!0&&!n&&(a===r?a=-r:a-=r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let c=Math.cos(this.aRotation),m=Math.sin(this.aRotation),x=o-this.aX,g=l-this.aY;o=x*c-g*m+this.aX,l=x*m+g*c+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gc=class extends mn{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function gn(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,c){a(s,o,c*(o-n),c*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,c,m,x){let g=(s-n)/c-(o-n)/(c+m)+(o-s)/m,M=(o-s)/m-(l-s)/(m+x)+(l-o)/x;g*=m,M*=m,a(s,o,g,M)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var Fs=new O,Bs=new O,vn=new gn,_n=new gn,xn=new gn,ri=class extends ii{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new O){let i=t,r=this.points,a=r.length,n=(a-+!this.closed)*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,c;this.closed||s>0?l=r[(s-1)%a]:(Bs.subVectors(r[0],r[1]).add(r[0]),l=Bs);let m=r[s%a],x=r[(s+1)%a];if(this.closed||s+2<a?c=r[(s+2)%a]:(Fs.subVectors(r[a-1],r[a-2]).add(r[a-1]),c=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,M=l.distanceToSquared(m)**+g,S=m.distanceToSquared(x)**+g,d=x.distanceToSquared(c)**+g;S<1e-4&&(S=1),M<1e-4&&(M=S),d<1e-4&&(d=S),vn.initNonuniformCatmullRom(l.x,m.x,x.x,c.x,M,S,d),_n.initNonuniformCatmullRom(l.y,m.y,x.y,c.y,M,S,d),xn.initNonuniformCatmullRom(l.z,m.z,x.z,c.z,M,S,d)}else this.curveType==="catmullrom"&&(vn.initCatmullRom(l.x,m.x,x.x,c.x,this.tension),_n.initCatmullRom(l.y,m.y,x.y,c.y,this.tension),xn.initCatmullRom(l.z,m.z,x.z,c.z,this.tension));return i.set(vn.calc(o),_n.calc(o),xn.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zs(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function vc(e,t){let i=1-e;return i*i*t}function _c(e,t){return 2*(1-e)*e*t}function xc(e,t){return e*e*t}function Nr(e,t,i,r){return vc(e,t)+_c(e,i)+xc(e,r)}function Sc(e,t){let i=1-e;return i*i*i*t}function Mc(e,t){let i=1-e;return 3*i*i*e*t}function yc(e,t){return 3*(1-e)*e*e*t}function bc(e,t){return e*e*e*t}function Ir(e,t,i,r,a){return Sc(e,t)+Mc(e,i)+yc(e,r)+bc(e,a)}var Vs=class extends ii{constructor(e=new Me,t=new Me,i=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Me){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Ir(e,r.x,a.x,n.x,s.x),Ir(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tc=class extends ii{constructor(e=new O,t=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new O){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Ir(e,r.x,a.x,n.x,s.x),Ir(e,r.y,a.y,n.y,s.y),Ir(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ks=class extends ii{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ec=class extends ii{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hs=class extends ii{constructor(e=new Me,t=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Me){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Nr(e,r.x,a.x,n.x),Nr(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gs=class extends ii{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Nr(e,r.x,a.x,n.x),Nr(e,r.y,a.y,n.y),Nr(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ws=class extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],c=r[n>r.length-2?r.length-1:n+1],m=r[n>r.length-3?r.length-1:n+2];return i.set(zs(s,o.x,l.x,c.x,m.x),zs(s,o.y,l.y,c.y,m.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Me().fromArray(r))}return this}},va=Object.freeze({__proto__:null,ArcCurve:gc,CatmullRomCurve3:ri,CubicBezierCurve:Vs,CubicBezierCurve3:Tc,EllipseCurve:mn,LineCurve:ks,LineCurve3:Ec,QuadraticBezierCurve:Hs,QuadraticBezierCurve3:Gs,SplineCurve:Ws}),wc=class extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new va[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let c=o[l];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new va[r.type]().fromJSON(r))}return this}},_a=class extends wc{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ks(this.currentPoint.clone(),new Me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Hs(this.currentPoint.clone(),new Me(e,t),new Me(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new Vs(this.currentPoint.clone(),new Me(e,t),new Me(i,r),new Me(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=new Ws([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new mn(e,t,i,r,a,n,s,o);if(this.curves.length>0){let m=l.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ur=class extends _a{constructor(e){super(e),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new _a().fromJSON(r))}return this}};function Ac(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=Xs(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,c;if(r&&(n=Nc(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let m=o,x=l;for(let g=i;g<a;g+=i){let M=e[g],S=e[g+1];M<o&&(o=M),S<l&&(l=S),M>m&&(m=M),S>x&&(x=S)}c=Math.max(m-o,x-l),c=c===0?0:32767/c}return Dr(n,s,i,o,l,c,0),s}function Xs(e,t,i,r,a){let n;if(a===Gc(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=Zs(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=Zs(s/r|0,e[s],e[s+1],n);return n&&nr(n,n.next)&&(Br(n),n=n.next),n}function Bi(e,t){if(!e)return e;t||=e;let i=e,r;do if(r=!1,!i.steiner&&(nr(i,i.next)||pt(i.prev,i,i.next)===0)){if(Br(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Dr(e,t,i,r,a,n,s){if(!e)return;!s&&n&&Fc(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,c=e.next;if(n?Cc(e,r,a,n):Rc(e)){t.push(l.i,e.i,c.i),Br(e),e=c.next,o=c.next;continue}if(e=c,e===o){s?s===1?(e=Pc(Bi(e),t),Dr(e,t,i,r,a,n,2)):s===2&&Lc(e,t,i,r,a,n):Dr(Bi(e),t,i,r,a,n,1);break}}}function Rc(e){let t=e.prev,i=e,r=e.next;if(pt(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,c=r.y,m=Math.min(a,n,s),x=Math.min(o,l,c),g=Math.max(a,n,s),M=Math.max(o,l,c),S=r.next;for(;S!==t;){if(S.x>=m&&S.x<=g&&S.y>=x&&S.y<=M&&Or(a,o,n,l,s,c,S.x,S.y)&&pt(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function Cc(e,t,i,r){let a=e.prev,n=e,s=e.next;if(pt(a,n,s)>=0)return!1;let o=a.x,l=n.x,c=s.x,m=a.y,x=n.y,g=s.y,M=Math.min(o,l,c),S=Math.min(m,x,g),d=Math.max(o,l,c),h=Math.max(m,x,g),u=Sn(M,S,t,i,r),y=Sn(d,h,t,i,r),b=e.prevZ,p=e.nextZ;for(;b&&b.z>=u&&p&&p.z<=y;){if(b.x>=M&&b.x<=d&&b.y>=S&&b.y<=h&&b!==a&&b!==s&&Or(o,m,l,x,c,g,b.x,b.y)&&pt(b.prev,b,b.next)>=0||(b=b.prevZ,p.x>=M&&p.x<=d&&p.y>=S&&p.y<=h&&p!==a&&p!==s&&Or(o,m,l,x,c,g,p.x,p.y)&&pt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;b&&b.z>=u;){if(b.x>=M&&b.x<=d&&b.y>=S&&b.y<=h&&b!==a&&b!==s&&Or(o,m,l,x,c,g,b.x,b.y)&&pt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;p&&p.z<=y;){if(p.x>=M&&p.x<=d&&p.y>=S&&p.y<=h&&p!==a&&p!==s&&Or(o,m,l,x,c,g,p.x,p.y)&&pt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Pc(e,t){let i=e;do{let r=i.prev,a=i.next.next;!nr(r,a)&&qs(r,i,i.next,a)&&Fr(r,a)&&Fr(a,r)&&(t.push(r.i,i.i,a.i),Br(i),Br(i.next),i=e=a),i=i.next}while(i!==e);return Bi(i)}function Lc(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Vc(s,o)){let l=Ys(s,o);s=Bi(s,s.next),l=Bi(l,l.next),Dr(s,t,i,r,a,n,0),Dr(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function Nc(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=Xs(e,t[n]*r,n<s-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),a.push(zc(o))}a.sort(Ic);for(let n=0;n<a.length;n++)i=Uc(a[n],i);return i}function Ic(e,t){let i=e.x-t.x;return i===0&&(i=e.y-t.y,i===0&&(i=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),i}function Uc(e,t){let i=Dc(e,t);if(!i)return t;let r=Ys(i,e);return Bi(r,r.next),Bi(i,i.next)}function Dc(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if(nr(e,i))return i;do{if(nr(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let x=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(x<=r&&x>n&&(n=x,s=i.x<i.next.x?i:i.next,x===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,c=s.y,m=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&js(a<c?r:n,a,l,c,a<c?n:r,a,i.x,i.y)){let x=Math.abs(a-i.y)/(r-i.x);Fr(i,e)&&(x<m||x===m&&(i.x>s.x||i.x===s.x&&Oc(s,i)))&&(s=i,m=x)}i=i.next}while(i!==o);return s}function Oc(e,t){return pt(e.prev,e,t.prev)<0&&pt(t.next,e,e.next)<0}function Fc(e,t,i,r){let a=e;do a.z===0&&(a.z=Sn(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,Bc(a)}function Bc(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let c=0;c<i&&(o++,s=s.nextZ,s);c++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function Sn(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function zc(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function js(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function Or(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&js(e,t,i,r,a,n,s,o)}function Vc(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!kc(e,t)&&(Fr(e,t)&&Fr(t,e)&&Hc(e,t)&&(pt(e.prev,e,t.prev)||pt(e,t.prev,t))||nr(e,t)&&pt(e.prev,e,e.next)>0&&pt(t.prev,t,t.next)>0)}function pt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function nr(e,t){return e.x===t.x&&e.y===t.y}function qs(e,t,i,r){let a=Sa(pt(e,t,i)),n=Sa(pt(e,t,r)),s=Sa(pt(i,r,e)),o=Sa(pt(i,r,t));return!!(a!==n&&s!==o||a===0&&xa(e,i,t)||n===0&&xa(e,r,t)||s===0&&xa(i,e,r)||o===0&&xa(i,t,r))}function xa(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Sa(e){return e>0?1:e<0?-1:0}function kc(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&qs(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Fr(e,t){return pt(e.prev,e,e.next)<0?pt(e,t,e.next)>=0&&pt(e,e.prev,t)>=0:pt(e,t,e.prev)<0||pt(e,e.next,t)<0}function Hc(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Ys(e,t){let i=Mn(e.i,e.x,e.y),r=Mn(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function Zs(e,t,i,r){let a=Mn(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Br(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Mn(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gc(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var Wc=class{static triangulate(e,t,i=2){return Ac(e,t,i)}},Ma=class cl{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return cl.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Js(t),Ks(r,t);let s=t.length;i.forEach(Js);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Ks(r,i[l]);let o=Wc.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function Js(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ks(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var ya=class ul extends gt{constructor(t=new Ur([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];s(c)}this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(n,2)),this.computeVertexNormals();function s(o){let l=[],c=i.curveSegments===void 0?12:i.curveSegments,m=i.steps===void 0?1:i.steps,x=i.depth===void 0?1:i.depth,g=i.bevelEnabled===void 0?!0:i.bevelEnabled,M=i.bevelThickness===void 0?.2:i.bevelThickness,S=i.bevelSize===void 0?M-.1:i.bevelSize,d=i.bevelOffset===void 0?0:i.bevelOffset,h=i.bevelSegments===void 0?3:i.bevelSegments,u=i.extrudePath,y=i.UVGenerator===void 0?Xc:i.UVGenerator,b,p=!1,T,v,R,f;if(u){b=u.getSpacedPoints(m),p=!0,g=!1;let ne=u.isCatmullRomCurve3?u.closed:!1;T=u.computeFrenetFrames(m,ne),v=new O,R=new O,f=new O}g||(h=0,M=0,S=0,d=0);let _=o.extractPoints(c),A=_.shape,w=_.holes;if(!Ma.isClockWise(A)){A=A.reverse();for(let ne=0,re=w.length;ne<re;ne++){let fe=w[ne];Ma.isClockWise(fe)&&(w[ne]=fe.reverse())}}function L(ne){let re=1e-10;re*re;let fe=ne[0];for(let Ae=1;Ae<=ne.length;Ae++){let Re=Ae%ne.length,Z=ne[Re],H=Z.x-fe.x,te=Z.y-fe.y,J=H*H+te*te,I=Math.max(Math.abs(Z.x),Math.abs(Z.y),Math.abs(fe.x),Math.abs(fe.y));if(J<=10000000000000001e-36*I*I){ne.splice(Re,1),Ae--;continue}fe=Z}}L(A),w.forEach(L);let U=w.length,N=A;for(let ne=0;ne<U;ne++){let re=w[ne];A=A.concat(re)}function F(ne,re,fe){return re||je("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(re,fe)}let j=A.length;function W(ne,re,fe){let Ae,Re,Z,H=ne.x-re.x,te=ne.y-re.y,J=fe.x-ne.x,I=fe.y-ne.y,Se=H*H+te*te,le=H*I-te*J;if(Math.abs(le)>2**-52){let ye=Math.sqrt(Se),P=Math.sqrt(J*J+I*I),E=re.x-te/ye,D=re.y+H/ye,G=fe.x-I/P,K=fe.y+J/P,se=((G-E)*I-(K-D)*J)/(H*I-te*J);Ae=E+H*se-ne.x,Re=D+te*se-ne.y;let ve=Ae*Ae+Re*Re;if(ve<=2)return new Me(Ae,Re);Z=Math.sqrt(ve/2)}else{let ye=!1;H>2**-52?J>2**-52&&(ye=!0):H<-(2**-52)?J<-(2**-52)&&(ye=!0):Math.sign(te)===Math.sign(I)&&(ye=!0),ye?(Ae=-te,Re=H,Z=Math.sqrt(Se)):(Ae=H,Re=te,Z=Math.sqrt(Se/2))}return new Me(Ae/Z,Re/Z)}let ee=[];for(let ne=0,re=N.length,fe=re-1,Ae=ne+1;ne<re;ne++,fe++,Ae++)fe===re&&(fe=0),Ae===re&&(Ae=0),ee[ne]=W(N[ne],N[fe],N[Ae]);let q=[],$,k=ee.concat();for(let ne=0,re=U;ne<re;ne++){let fe=w[ne];$=[];for(let Ae=0,Re=fe.length,Z=Re-1,H=Ae+1;Ae<Re;Ae++,Z++,H++)Z===Re&&(Z=0),H===Re&&(H=0),$[Ae]=W(fe[Ae],fe[Z],fe[H]);q.push($),k=k.concat($)}let Te;if(h===0)Te=Ma.triangulateShape(N,w);else{let ne=[],re=[];for(let fe=0;fe<h;fe++){let Ae=fe/h,Re=M*Math.cos(Ae*Math.PI/2),Z=S*Math.sin(Ae*Math.PI/2)+d;for(let H=0,te=N.length;H<te;H++){let J=F(N[H],ee[H],Z);de(J.x,J.y,-Re),Ae===0&&ne.push(J)}for(let H=0,te=U;H<te;H++){let J=w[H];$=q[H];let I=[];for(let Se=0,le=J.length;Se<le;Se++){let ye=F(J[Se],$[Se],Z);de(ye.x,ye.y,-Re),Ae===0&&I.push(ye)}Ae===0&&re.push(I)}}Te=Ma.triangulateShape(ne,re)}let ge=Te.length,Ke=S+d;for(let ne=0;ne<j;ne++){let re=g?F(A[ne],k[ne],Ke):A[ne];p?(R.copy(T.normals[0]).multiplyScalar(re.x),v.copy(T.binormals[0]).multiplyScalar(re.y),f.copy(b[0]).add(R).add(v),de(f.x,f.y,f.z)):de(re.x,re.y,0)}for(let ne=1;ne<=m;ne++)for(let re=0;re<j;re++){let fe=g?F(A[re],k[re],Ke):A[re];p?(R.copy(T.normals[ne]).multiplyScalar(fe.x),v.copy(T.binormals[ne]).multiplyScalar(fe.y),f.copy(b[ne]).add(R).add(v),de(f.x,f.y,f.z)):de(fe.x,fe.y,x/m*ne)}for(let ne=h-1;ne>=0;ne--){let re=ne/h,fe=M*Math.cos(re*Math.PI/2),Ae=S*Math.sin(re*Math.PI/2)+d;for(let Re=0,Z=N.length;Re<Z;Re++){let H=F(N[Re],ee[Re],Ae);de(H.x,H.y,x+fe)}for(let Re=0,Z=w.length;Re<Z;Re++){let H=w[Re];$=q[Re];for(let te=0,J=H.length;te<J;te++){let I=F(H[te],$[te],Ae);p?de(I.x,I.y+b[m-1].y,b[m-1].x+fe):de(I.x,I.y,x+fe)}}}He(),ie();function He(){let ne=a.length/3;if(g){let re=0,fe=j*re;for(let Ae=0;Ae<ge;Ae++){let Re=Te[Ae];De(Re[2]+fe,Re[1]+fe,Re[0]+fe)}re=m+h*2,fe=j*re;for(let Ae=0;Ae<ge;Ae++){let Re=Te[Ae];De(Re[0]+fe,Re[1]+fe,Re[2]+fe)}}else{for(let re=0;re<ge;re++){let fe=Te[re];De(fe[2],fe[1],fe[0])}for(let re=0;re<ge;re++){let fe=Te[re];De(fe[0]+j*m,fe[1]+j*m,fe[2]+j*m)}}r.addGroup(ne,a.length/3-ne,0)}function ie(){let ne=a.length/3,re=0;oe(N,re),re+=N.length;for(let fe=0,Ae=w.length;fe<Ae;fe++){let Re=w[fe];oe(Re,re),re+=Re.length}r.addGroup(ne,a.length/3-ne,1)}function oe(ne,re){let fe=ne.length;for(;--fe>=0;){let Ae=fe,Re=fe-1;Re<0&&(Re=ne.length-1);for(let Z=0,H=m+h*2;Z<H;Z++){let te=j*Z,J=j*(Z+1);ze(re+Ae+te,re+Re+te,re+Re+J,re+Ae+J)}}}function de(ne,re,fe){l.push(ne),l.push(re),l.push(fe)}function De(ne,re,fe){_e(ne),_e(re),_e(fe);let Ae=a.length/3,Re=y.generateTopUV(r,a,Ae-3,Ae-2,Ae-1);Ze(Re[0]),Ze(Re[1]),Ze(Re[2])}function ze(ne,re,fe,Ae){_e(ne),_e(re),_e(Ae),_e(re),_e(fe),_e(Ae);let Re=a.length/3,Z=y.generateSideWallUV(r,a,Re-6,Re-3,Re-2,Re-1);Ze(Z[0]),Ze(Z[1]),Ze(Z[3]),Ze(Z[1]),Ze(Z[2]),Ze(Z[3])}function _e(ne){a.push(l[ne*3+0]),a.push(l[ne*3+1]),a.push(l[ne*3+2])}function Ze(ne){n.push(ne.x),n.push(ne.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return jc(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new va[a.type]().fromJSON(a)),new ul(r,t.options)}},Xc={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],c=t[a*3],m=t[a*3+1];return[new Me(n,s),new Me(o,l),new Me(c,m)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],c=t[r*3],m=t[r*3+1],x=t[r*3+2],g=t[a*3],M=t[a*3+1],S=t[a*3+2],d=t[n*3],h=t[n*3+1],u=t[n*3+2];return Math.abs(o-m)<Math.abs(s-c)?[new Me(s,1-l),new Me(c,1-x),new Me(g,1-S),new Me(d,1-u)]:[new Me(o,1-l),new Me(m,1-x),new Me(M,1-S),new Me(h,1-u)]}};function jc(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var yn=class dl extends Os{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1];super(a,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new dl(t.radius,t.detail)}},Kt=class pl extends gt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),c=o+1,m=l+1,x=t/o,g=i/l,M=[],S=[],d=[],h=[];for(let u=0;u<m;u++){let y=u*g-s;for(let b=0;b<c;b++){let p=b*x-n;S.push(p,-y,0),d.push(0,0,1),h.push(b/o),h.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<o;y++){let b=y+c*u,p=y+c*(u+1),T=y+1+c*(u+1),v=y+1+c*u;M.push(b,p,v),M.push(p,T,v)}this.setIndex(M),this.setAttribute("position",new Ye(S,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.widthSegments,t.heightSegments)}},Mt=class fl extends gt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),c=0,m=[],x=new O,g=new O,M=[],S=[],d=[],h=[];for(let u=0;u<=r;u++){let y=[],b=u/r,p=s+b*o,T=t*Math.cos(p),v=Math.sqrt(t*t-T*T),R=0;u===0&&s===0?R=.5/i:u===r&&l===Math.PI&&(R=-.5/i);for(let f=0;f<=i;f++){let _=f/i,A=a+_*n;x.x=-v*Math.cos(A),x.y=T,x.z=v*Math.sin(A),S.push(x.x,x.y,x.z),g.copy(x).normalize(),d.push(g.x,g.y,g.z),h.push(_+R,1-b),y.push(c++)}m.push(y)}for(let u=0;u<r;u++)for(let y=0;y<i;y++){let b=m[u][y+1],p=m[u][y],T=m[u+1][y],v=m[u+1][y+1];(u!==0||s>0)&&M.push(b,p,v),(u!==r-1||l<Math.PI)&&M.push(p,T,v)}this.setIndex(M),this.setAttribute("position",new Ye(S,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Lt=class ml extends gt{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],c=[],m=[],x=[],g=new O,M=new O,S=new O;for(let d=0;d<=r;d++){let h=s+d/r*o;for(let u=0;u<=a;u++){let y=u/a*n;M.x=(t+i*Math.cos(h))*Math.cos(y),M.y=(t+i*Math.cos(h))*Math.sin(y),M.z=i*Math.sin(h),c.push(M.x,M.y,M.z),g.x=t*Math.cos(y),g.y=t*Math.sin(y),S.subVectors(M,g).normalize(),m.push(S.x,S.y,S.z),x.push(u/a),x.push(d/r)}}for(let d=1;d<=r;d++)for(let h=1;h<=a;h++){let u=(a+1)*d+h-1,y=(a+1)*(d-1)+h-1,b=(a+1)*(d-1)+h,p=(a+1)*d+h;l.push(u,y,p),l.push(y,b,p)}this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(m,3)),this.setAttribute("uv",new Ye(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Ei=class gl extends gt{constructor(t=new Gs(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new O,l=new O,c=new Me,m=new O,x=[],g=[],M=[],S=[];d(),this.setIndex(S),this.setAttribute("position",new Ye(x,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(M,2));function d(){for(let b=0;b<i;b++)h(b);h(n===!1?i:0),y(),u()}function h(b){m=t.getPointAt(b/i,m);let p=s.normals[b],T=s.binormals[b];for(let v=0;v<=a;v++){let R=v/a*Math.PI*2,f=Math.sin(R),_=-Math.cos(R);l.x=_*p.x+f*T.x,l.y=_*p.y+f*T.y,l.z=_*p.z+f*T.z,l.normalize(),g.push(l.x,l.y,l.z),o.x=m.x+r*l.x,o.y=m.y+r*l.y,o.z=m.z+r*l.z,x.push(o.x,o.y,o.z)}}function u(){for(let b=1;b<=i;b++)for(let p=1;p<=a;p++){let T=(a+1)*(b-1)+(p-1),v=(a+1)*b+(p-1),R=(a+1)*b+p,f=(a+1)*(b-1)+p;S.push(T,v,f),S.push(v,R,f)}}function y(){for(let b=0;b<=i;b++)for(let p=0;p<=a;p++)c.x=b/i,c.y=p/a,M.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new gl(new va[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function sr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if($s(a))a.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if($s(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Ut(e){let t={};for(let i=0;i<e.length;i++){let r=sr(e[i]);for(let a in r)t[a]=r[a]}return t}function $s(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function qc(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Qs(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:it.workingColorSpace}var Yc={clone:sr,merge:Ut},Zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jt=class extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zc,this.fragmentShader=Jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=qc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(r.value);break;case"v2":this.uniforms[i].value=new Me().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new St().fromArray(r.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Kc=class extends jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$t=class extends Cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bn=class extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$c=class extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function or(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Tn(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var zr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(i):r,this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qc=class extends zr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ss,endingEnd:ss}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case os:a=e,s=2*t-i;break;case ls:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case os:n=e,o=2*i-t;break;case ls:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*c,this._offsetNext=n*c}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,m=this._offsetNext,x=this._weightPrev,g=this._weightNext,M=(i-t)/(r-t),S=M*M,d=S*M,h=-x*d+2*x*S-x*M,u=(1+x)*d+(-1.5-2*x)*S+(-.5+x)*M+1,y=(-1-g)*d+(1.5+g)*S+.5*M,b=g*d-g*S;for(let p=0;p!==s;++p)a[p]=h*n[c+p]+u*n[l+p]+y*n[o+p]+b*n[m+p];return a}},eu=class extends zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(i-t)/(r-t),m=1-c;for(let x=0;x!==s;++x)a[x]=n[l+x]*m+n[o+x]*c;return a}},tu=class extends zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},iu=class extends zr{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this.inTangents,m=this.outTangents;if(!c||!m){let M=(i-t)/(r-t),S=1-M;for(let d=0;d!==s;++d)a[d]=n[l+d]*S+n[o+d]*M;return a}let x=s*2,g=e-1;for(let M=0;M!==s;++M){let S=n[l+M],d=n[o+M],h=g*x+M*2,u=m[h],y=m[h+1],b=e*x+M*2,p=c[b],T=c[b+1];a[M]=eo(au(i,t,u,p,r),S,y,T,d)}return a}};function eo(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function ru(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function au(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=eo(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=ru(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}var ai=class{constructor(e,t,i,r){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=or(t,this.TimeBufferType),this.values=or(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:or(e.times,Array),values:or(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Tn(e.settings)&&(i.settings={inTangents:or(e.settings.inTangents,Array),outTangents:or(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new iu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Va:t=this.InterpolantFactoryMethodLinear;break;case ka:t=this.InterpolantFactoryMethodSmooth;break;case ns:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return We("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return ka;case this.InterpolantFactoryMethodBezier:return ns}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Tn(this.settings)&&(to(this.settings.inTangents,e),to(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){je("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){je("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Th(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ka,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s];if(l!==e[s+1]&&(s!==1||l!==e[0]))if(r)o=!0;else{let c=s*i,m=c-i,x=c+i;for(let g=0;g!==i;++g){let M=t[c+g];if(M!==t[m+g]||M!==t[x+g]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*i,m=n*i;for(let x=0;x!==i;++x)t[m+x]=t[c+x]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,n),this.values=t.slice(0,n*i)),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Tn(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function to(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}ai.prototype.ValueTypeName="",ai.prototype.TimeBufferType=Float32Array,ai.prototype.ValueBufferType=Float32Array,ai.prototype.DefaultInterpolation=Va;var Vr=class extends ai{constructor(e,t,i){super(e,t,i)}};Vr.prototype.ValueTypeName="bool",Vr.prototype.ValueBufferType=Array,Vr.prototype.DefaultInterpolation=Zr,Vr.prototype.InterpolantFactoryMethodLinear=void 0,Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var nu=class extends ai{constructor(e,t,i,r){super(e,t,i,r)}};nu.prototype.ValueTypeName="color";var su=class extends ai{constructor(e,t,i,r){super(e,t,i,r)}};su.prototype.ValueTypeName="number";var ou=class extends zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let c=l+s;l!==c;l+=4)Ii.slerpFlat(a,0,n,l-s,n,l,o);return a}},io=class extends ai{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new ou(this.times,this.values,this.getValueSize(),e)}};io.prototype.ValueTypeName="quaternion",io.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends ai{constructor(e,t,i){super(e,t,i)}};kr.prototype.ValueTypeName="string",kr.prototype.ValueBufferType=Array,kr.prototype.DefaultInterpolation=Zr,kr.prototype.InterpolantFactoryMethodLinear=void 0,kr.prototype.InterpolantFactoryMethodSmooth=void 0;var lu=class extends ai{constructor(e,t,i,r){super(e,t,i,r)}};lu.prototype.ValueTypeName="vector";var hu=new class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){s++,a===!1&&r.onStart!==void 0&&r.onStart(c,n,s),a=!0},this.itemEnd=function(c){n++,r.onProgress!==void 0&&r.onProgress(c,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,m){return l.push(c,m),this},this.removeHandler=function(c){let m=l.indexOf(c);return m!==-1&&l.splice(m,2),this},this.getHandler=function(c){for(let m=0,x=l.length;m<x;m+=2){let g=l[m],M=l[m+1];if(g.global&&(g.lastIndex=0),g.test(c))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},cu=class{constructor(e){this.manager=e===void 0?hu:e,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};cu.DEFAULT_MATERIAL_NAME="__DEFAULT";var ro=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ao=class extends ro{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},En=new mt,no=new O,so=new O,uu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fn,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;no.setFromMatrixPosition(e.matrixWorld),t.position.copy(no),so.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(so),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){En.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(En,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(En)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ba=new O,Ta=new Ii,ni=new O,oo=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ba,Ta,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ta,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ba,Ta,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ta,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wi=new O,lo=new Me,ho=new Me,qt=class extends oo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,lo,ho),t.subVectors(ho,lo)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ea=class extends oo{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},du=class extends uu{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},co=class extends ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new du}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},lr=-90,hr=1,pu=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(lr,hr,e,t);r.layers=this.layers,this.add(r);let a=new qt(lr,hr,e,t);a.layers=this.layers,this.add(a);let n=new qt(lr,hr,e,t);n.layers=this.layers,this.add(n);let s=new qt(lr,hr,e,t);s.layers=this.layers,this.add(s);let o=new qt(lr,hr,e,t);o.layers=this.layers,this.add(o);let l=new qt(lr,hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,c]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let d=!1;d=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(m,x,g),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}},fu=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},wn="\\[\\]\\.:\\/",mu=RegExp("["+wn+"]","g"),An="[^"+wn+"]",gu="[^"+wn.replace("\\.","")+"]",vu="((?:WC+[\\/:])*)".replace("WC",An),_u="(WCOD+)?".replace("WCOD",gu),xu="(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC",An),Su="\\.(WC+)(?:\\[(.+)\\])?".replace("WC",An),Mu=RegExp("^"+vu+_u+xu+Su+"$"),yu=["material","materials","bones","map"],bu=class{constructor(e,t,i){let r=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},vt=class mr{constructor(t,i,r){this.path=i,this.parsedPath=r||mr.parseTrackName(i),this.node=mr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new mr.Composite(t,i,r):new mr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mu,"")}static parseTrackName(t){let i=Mu.exec(t);if(i===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);yu.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=mr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=i.objectIndex;switch(r){case"materials":if(!t.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===c){c=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(c!==void 0){if(t[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[a];if(s===void 0){let c=i.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=bu,vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray],vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class vl{static{vl.prototype.isMatrix2=!0}constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}};function uo(e,t,i,r){let a=Tu(r);switch(i){case Ol:return e*t;case Bl:return e*t/a.components*a.byteLength;case is:return e*t/a.components*a.byteLength;case Yr:return e*t*2/a.components*a.byteLength;case rs:return e*t*2/a.components*a.byteLength;case Fl:return e*t*3/a.components*a.byteLength;case _r:return e*t*4/a.components*a.byteLength;case as:return e*t*4/a.components*a.byteLength;case zl:case Vl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case kl:case Hl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Wl:case jl:return Math.max(e,16)*Math.max(t,8)/4;case Gl:case Xl:return Math.max(e,8)*Math.max(t,8)/2;case ql:case Yl:case Jl:case Kl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Zl:case $l:case Ql:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case eh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case th:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ih:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case rh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ah:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case nh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case sh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case oh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case lh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case hh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ch:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case uh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case dh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ph:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case fh:case mh:case gh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case vh:case _h:return Math.ceil(e/4)*Math.ceil(t/4)*8;case xh:case Sh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${i} format.`)}function Tu(e){switch(e){case _i:case Ll:return{byteLength:1,components:1};case Kn:case Nl:case xi:return{byteLength:2,components:1};case $n:case Qn:return{byteLength:2,components:4};case Ci:case Il:case qr:return{byteLength:4,components:1};case Ul:case Dl:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}})),typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function po(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Eu(e){let t=new WeakMap;function i(o,l){let c=o.array,m=o.usage,x=c.byteLength,g=e.createBuffer();e.bindBuffer(l,g),e.bufferData(l,c,m),o.onUploadCallback();let M;if(c instanceof Float32Array)M=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)M=e.HALF_FLOAT;else if(c instanceof Uint16Array)M=o.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(c instanceof Int16Array)M=e.SHORT;else if(c instanceof Uint32Array)M=e.UNSIGNED_INT;else if(c instanceof Int32Array)M=e.INT;else if(c instanceof Int8Array)M=e.BYTE;else if(c instanceof Uint8Array)M=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)M=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:g,type:M,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:x}}function r(o,l,c){let m=l.array,x=l.updateRanges;if(e.bindBuffer(c,o),x.length===0)e.bufferSubData(c,0,m);else{x.sort((M,S)=>M.start-S.start);let g=0;for(let M=1;M<x.length;M++){let S=x[g],d=x[M];d.start<=S.start+S.count+1?S.count=Math.max(S.count,d.start+d.count-S.start):(++g,x[g]=d)}x.length=g+1;for(let M=0,S=x.length;M<S;M++){let d=x[M];e.bufferSubData(c,d.start*m.BYTES_PER_ELEMENT,m,d.start,d.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let m=t.get(o);(!m||m.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}var Je={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
	#include <morphinstance_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},be={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},si={basic:{uniforms:Ut([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Ut([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Ut([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Ut([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Ut([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new et(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Ut([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Ut([be.points,be.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Ut([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Ut([be.common,be.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Ut([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Ut([be.sprite,be.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Ut([be.common,be.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Ut([be.lights,be.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};si.physical={uniforms:Ut([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var wa={r:0,b:0,g:0},wu=new mt,fo=new qe;fo.set(-1,0,0,0,1,0,0,0,1);function Au(e,t,i,r,a,n){let s=new et(0),o=a===!0?0:1,l,c,m=null,x=0,g=null;function M(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let p=y.backgroundBlurriness>0;b=t.get(b,p)}return b}function S(y){let b=!1,p=M(y);p===null?h(s,o):p&&p.isColor&&(h(p,1),b=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function d(y,b){let p=M(b);p&&(p.isCubeTexture||p.mapping===306)?(c===void 0&&(c=new st(new Pt(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:sr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,v,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wu.makeRotationFromEuler(b.backgroundRotation)).transpose(),p.isCubeTexture&&p.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fo),c.material.toneMapped=it.getTransfer(p.colorSpace)!==Kr,(m!==p||x!==p.version||g!==e.toneMapping)&&(c.material.needsUpdate=!0,m=p,x=p.version,g=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(l===void 0&&(l=new st(new Kt(2,2),new jt({name:"BackgroundMaterial",uniforms:sr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=p,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=it.getTransfer(p.colorSpace)!==Kr,p.matrixAutoUpdate===!0&&p.updateMatrix(),l.material.uniforms.uvTransform.value.copy(p.matrix),(m!==p||x!==p.version||g!==e.toneMapping)&&(l.material.needsUpdate=!0,m=p,x=p.version,g=e.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function h(y,b){y.getRGB(wa,Qs(e)),i.buffers.color.setClear(wa.r,wa.g,wa.b,b,n)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(y,b=1){s.set(y),o=b,h(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,h(s,o)},render:S,addToRenderList:d,dispose:u}}function Ru(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=g(null),n=a,s=!1;function o(w,L,U,N,F){let j=!1,W=x(w,N,U,L);n!==W&&(n=W,c(n.object)),j=M(w,N,U,F),j&&S(w,N,U,F),F!==null&&t.update(F,e.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,p(w,L,U,N),F!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return e.createVertexArray()}function c(w){return e.bindVertexArray(w)}function m(w){return e.deleteVertexArray(w)}function x(w,L,U,N){let F=N.wireframe===!0,j=r[L.id];j===void 0&&(j={},r[L.id]=j);let W=w.isInstancedMesh===!0?w.id:0,ee=j[W];ee===void 0&&(ee={},j[W]=ee);let q=ee[U.id];q===void 0&&(q={},ee[U.id]=q);let $=q[F];return $===void 0&&($=g(l()),q[F]=$),$}function g(w){let L=[],U=[],N=[];for(let F=0;F<i;F++)L[F]=0,U[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:N,object:w,attributes:{},index:null}}function M(w,L,U,N){let F=n.attributes,j=L.attributes,W=0,ee=U.getAttributes();for(let q in ee)if(ee[q].location>=0){let $=F[q],k=j[q];if(k===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(k=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(k=w.instanceColor)),$===void 0||$.attribute!==k||k&&$.data!==k.data)return!0;W++}return n.attributesNum!==W||n.index!==N}function S(w,L,U,N){let F={},j=L.attributes,W=0,ee=U.getAttributes();for(let q in ee)if(ee[q].location>=0){let $=j[q];$===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&($=w.instanceColor));let k={};k.attribute=$,$&&$.data&&(k.data=$.data),F[q]=k,W++}n.attributes=F,n.attributesNum=W,n.index=N}function d(){let w=n.newAttributes;for(let L=0,U=w.length;L<U;L++)w[L]=0}function h(w){u(w,0)}function u(w,L){let U=n.newAttributes,N=n.enabledAttributes,F=n.attributeDivisors;U[w]=1,N[w]===0&&(e.enableVertexAttribArray(w),N[w]=1),F[w]!==L&&(e.vertexAttribDivisor(w,L),F[w]=L)}function y(){let w=n.newAttributes,L=n.enabledAttributes;for(let U=0,N=L.length;U<N;U++)L[U]!==w[U]&&(e.disableVertexAttribArray(U),L[U]=0)}function b(w,L,U,N,F,j,W){W===!0?e.vertexAttribIPointer(w,L,U,F,j):e.vertexAttribPointer(w,L,U,N,F,j)}function p(w,L,U,N){d();let F=N.attributes,j=U.getAttributes(),W=L.defaultAttributeValues;for(let ee in j){let q=j[ee];if(q.location>=0){let $=F[ee];if($===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),$!==void 0){let k=$.normalized,Te=$.itemSize,ge=t.get($);if(ge===void 0)continue;let Ke=ge.buffer,He=ge.type,ie=ge.bytesPerElement,oe=He===e.INT||He===e.UNSIGNED_INT||$.gpuType===1013;if($.isInterleavedBufferAttribute){let de=$.data,De=de.stride,ze=$.offset;if(de.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)u(q.location+_e,de.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let _e=0;_e<q.locationSize;_e++)h(q.location+_e);e.bindBuffer(e.ARRAY_BUFFER,Ke);for(let _e=0;_e<q.locationSize;_e++)b(q.location+_e,Te/q.locationSize,He,k,De*ie,(ze+Te/q.locationSize*_e)*ie,oe)}else{if($.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)u(q.location+de,$.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<q.locationSize;de++)h(q.location+de);e.bindBuffer(e.ARRAY_BUFFER,Ke);for(let de=0;de<q.locationSize;de++)b(q.location+de,Te/q.locationSize,He,k,Te*ie,Te/q.locationSize*de*ie,oe)}}else if(W!==void 0){let k=W[ee];if(k!==void 0)switch(k.length){case 2:e.vertexAttrib2fv(q.location,k);break;case 3:e.vertexAttrib3fv(q.location,k);break;case 4:e.vertexAttrib4fv(q.location,k);break;default:e.vertexAttrib1fv(q.location,k)}}}}y()}function T(){_();for(let w in r){let L=r[w];for(let U in L){let N=L[U];for(let F in N){let j=N[F];for(let W in j)m(j[W].object),delete j[W];delete N[F]}}delete r[w]}}function v(w){if(r[w.id]===void 0)return;let L=r[w.id];for(let U in L){let N=L[U];for(let F in N){let j=N[F];for(let W in j)m(j[W].object),delete j[W];delete N[F]}}delete r[w.id]}function R(w){for(let L in r){let U=r[L];for(let N in U){let F=U[N];if(F[w.id]===void 0)continue;let j=F[w.id];for(let W in j)m(j[W].object),delete j[W];delete F[w.id]}}}function f(w){for(let L in r){let U=r[L],N=w.isInstancedMesh===!0?w.id:0,F=U[N];if(F!==void 0){for(let j in F){let W=F[j];for(let ee in W)m(W[ee].object),delete W[ee];delete F[j]}delete U[N],Object.keys(U).length===0&&delete r[L]}}}function _(){A(),s=!0,n!==a&&(n=a,c(n.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:_,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:v,releaseStatesOfObject:f,releaseStatesOfProgram:R,initAttributes:d,enableAttribute:h,disableUnusedAttributes:y}}function Cu(e,t,i){let r;function a(l){r=l}function n(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function s(l,c,m){m!==0&&(e.drawArraysInstanced(r,l,c,m),i.update(c,r,m))}function o(l,c,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,m);let x=0;for(let g=0;g<m;g++)x+=c[g];i.update(x,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function Pu(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==1023&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let f=R===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==1009&&R!==1015&&!f&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision===void 0?"highp":i.precision,m=l(c);m!==c&&(We("WebGLRenderer:",c,"not supported, using",m,"instead."),c=m);let x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let M=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_TEXTURE_SIZE),h=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),p=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),v=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:S,maxTextureSize:d,maxCubemapSize:h,maxAttributes:u,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:p,maxSamples:T,samples:v}}function Lu(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Ti,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){let M=x.length!==0||g||r!==0||a;return a=g,r=x.length,M},this.beginShadows=function(){n=!0,m(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(x,g){i=m(x,g,0)},this.setState=function(x,g,M){let S=x.clippingPlanes,d=x.clipIntersection,h=x.clipShadows,u=e.get(x);if(!a||S===null||S.length===0||n&&!h)n?m(null):c();else{let y=n?0:r,b=y*4,p=u.clippingState||null;l.value=p,p=m(S,g,b,M);for(let T=0;T!==b;++T)p[T]=i[T];u.clippingState=p,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function m(x,g,M,S){let d=x===null?0:x.length,h=null;if(d!==0){if(h=l.value,S!==!0||h===null){let u=M+d*4,y=g.matrixWorldInverse;o.getNormalMatrix(y),(h===null||h.length<u)&&(h=new Float32Array(u));for(let b=0,p=M;b!==d;++b,p+=4)s.copy(x[b]).applyMatrix4(y,o),s.normal.toArray(h,p),h[p+3]=s.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,h}}var cr=4,Nu=6,Iu=20,Uu=256,Hr=new Ea,mo=new et,Rn=null,Cn=0,Pn=0,Ln=!1,Du=new O,zi=new O,go=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=Du}=a;Rn=this._renderer.getRenderTarget(),Cn=this._renderer.getActiveCubeFace(),Pn=this._renderer.getActiveMipmapLevel(),Ln=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rn,Cn,Pn),this._renderer.xr.enabled=Ln,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rn=this._renderer.getRenderTarget(),Cn=this._renderer.getActiveCubeFace(),Pn=this._renderer.getActiveMipmapLevel(),Ln=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:xi,format:_r,colorSpace:Ha,depthBuffer:!1},r=vo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vo(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ou(a)),this._blurMaterial=Bu(a,e,t),this._ggxMaterial=Fu(a,e,t)}return r}_compileMaterial(e){let t=new st(new gt,e);this._renderer.compile(t,Hr)}_sceneToCubeUV(e,t,i,r,a){let n=new qt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,m=l.toneMapping;l.getClearColor(mo),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new Pt,new Pr({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,M=!1,S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,M=!0):(g.color.copy(mo),M=!0);for(let d=0;d<6;d++){let h=d%3;h===0?(n.up.set(0,s[d],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[d],a.y,a.z)):h===1?(n.up.set(0,0,s[d]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[d],a.z)):(n.up.set(0,s[d],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[d]));let u=this._cubeSize;ur(r,h*u,d>2?u:0,u,u),l.setRenderTarget(r),M&&l.render(x,n),l.render(e,n)}l.toneMapping=m,l.autoClear=c,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_o());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;ur(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Hr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),m=Math.sqrt(l*l-c*c)*(l*1.25),{_lodMax:x}=this,g=this._sizeLods[i],M=3*g*(i>x-cr?i-x+cr:0),S=4*(this._cubeSize-g);o.envMap.value=e.texture,o.roughness.value=m,o.mipInt.value=x-t,ur(a,M,S,3*g,2*g),r.setRenderTarget(a),r.render(s,Hr),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=x-i,ur(e,M,S,3*g,2*g),r.setRenderTarget(e),r.render(s,Hr)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let c=this._sizeLods[r];ur(t,3*c*(r>this._lodMax-cr?r-this._lodMax+cr:0),4*(this._cubeSize-c),3*c,2*c),n.setRenderTarget(t),n.render(o,Hr)}};function Ou(e){let t=[],i=[],r=e,a=e-cr+1+Nu;for(let n=0;n<a;n++){let s=2**r;t.push(s);let o=1/(s-2),l=-o,c=1+o,m=[l,l,c,l,c,c,l,l,c,c,l,c],x=new Float32Array(108),g=new Float32Array(108);for(let S=0;S<6;S++){let d=S%3*2/3-1,h=S>2?0:-1,u=[d,h,0,d+2/3,h,0,d+2/3,h+1,0,d,h,0,d+2/3,h+1,0,d,h+1,0];x.set(u,18*S);for(let y=0;y<6;y++){let b=m[y*2]*2-1,p=m[y*2+1]*2-1;S===0?zi.set(1,p,b):S===1?zi.set(-b,1,-p):S===2?zi.set(-b,p,1):S===3?zi.set(-1,p,-b):S===4?zi.set(-b,-1,p):zi.set(b,p,-1),zi.toArray(g,(S*6+y)*3)}}let M=new gt;M.setAttribute("position",new ti(x,3)),M.setAttribute("outputDirection",new ti(g,3)),i.push(new st(M,null)),r>cr&&r--}return{lodMeshes:i,sizeLods:t}}function vo(e,t,i){let r=new Gt(e,t,i);return r.texture.mapping=306,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ur(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Fu(e,t,i){return new jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Uu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Aa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bu(e,t,i){return new jt({name:"SphericalGaussianBlur",defines:{SAMPLES:Iu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Aa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _o(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function xo(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Aa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var So=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Us(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pt(5,5,5),a=new jt({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let n=new st(r,a),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ft),new pu(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function zu(e){let t=new WeakMap,i=new WeakMap,r=null;function a(g,M=!1){return g==null?null:M?s(g):n(g)}function n(g){if(g&&g.isTexture){let M=g.mapping;if(M===303||M===304)if(t.has(g)){let S=t.get(g).texture;return o(S,g.mapping)}else{let S=g.image;if(S&&S.height>0){let d=new So(S.height);return d.fromEquirectangularTexture(e,g),t.set(g,d),g.addEventListener("dispose",c),o(d.texture,g.mapping)}else return null}}return g}function s(g){if(g&&g.isTexture){let M=g.mapping,S=M===303||M===304,d=M===301||M===302;if(S||d){let h=i.get(g),u=h===void 0?0:h.texture.pmremVersion;if(g.isRenderTargetTexture&&g.pmremVersion!==u)return r===null&&(r=new go(e)),h=S?r.fromEquirectangular(g,h):r.fromCubemap(g,h),h.texture.pmremVersion=g.pmremVersion,i.set(g,h),h.texture;if(h!==void 0)return h.texture;{let y=g.image;return S&&y&&y.height>0||d&&y&&l(y)?(r===null&&(r=new go(e)),h=S?r.fromEquirectangular(g):r.fromCubemap(g),h.texture.pmremVersion=g.pmremVersion,i.set(g,h),g.addEventListener("dispose",m),h.texture):null}}}return g}function o(g,M){return M===303?g.mapping=301:M===304&&(g.mapping=302),g}function l(g){let M=0;for(let S=0;S<6;S++)g[S]!==void 0&&M++;return M===6}function c(g){let M=g.target;M.removeEventListener("dispose",c);let S=t.get(M);S!==void 0&&(t.delete(M),S.dispose())}function m(g){let M=g.target;M.removeEventListener("dispose",m);let S=i.get(M);S!==void 0&&(i.delete(M),S.dispose())}function x(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:x}}function Vu(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Xi("WebGLRenderer: "+r+" extension not supported."),a}}}function ku(e,t,i,r){let a={},n=new WeakMap;function s(x){let g=x.target;g.index!==null&&t.remove(g.index);for(let S in g.attributes)t.remove(g.attributes[S]);g.removeEventListener("dispose",s),delete a[g.id];let M=n.get(g);M&&(t.remove(M),n.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function o(x,g){return a[g.id]===!0||(g.addEventListener("dispose",s),a[g.id]=!0,i.memory.geometries++),g}function l(x){let g=x.attributes;for(let M in g)t.update(g[M],e.ARRAY_BUFFER)}function c(x){let g=[],M=x.index,S=x.attributes.position,d=0;if(S===void 0)return;if(M!==null){let y=M.array;d=M.version;for(let b=0,p=y.length;b<p;b+=3){let T=y[b+0],v=y[b+1],R=y[b+2];g.push(T,v,v,R,R,T)}}else{let y=S.array;d=S.version;for(let b=0,p=y.length/3-1;b<p;b+=3){let T=b+0,v=b+1,R=b+2;g.push(T,v,v,R,R,T)}}let h=new(S.count>=65535?Ps:Cs)(g,1);h.version=d;let u=n.get(x);u&&t.remove(u),n.set(x,h)}function m(x){let g=n.get(x);if(g){let M=x.index;M!==null&&g.version<M.version&&c(x)}else c(x);return n.get(x)}return{get:o,update:l,getWireframeAttribute:m}}function Hu(e,t,i){let r;function a(x){r=x}let n,s;function o(x){n=x.type,s=x.bytesPerElement}function l(x,g){e.drawElements(r,g,n,x*s),i.update(g,r,1)}function c(x,g,M){M!==0&&(e.drawElementsInstanced(r,g,n,x*s,M),i.update(g,r,M))}function m(x,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,n,x,0,M);let S=0;for(let d=0;d<M;d++)S+=g[d];i.update(S,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=m}function Gu(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=n/3*o;break;case e.LINES:i.lines+=n/2*o;break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:je("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Wu(e,t,i){let r=new WeakMap,a=new St;function n(s,o,l){let c=s.morphTargetInfluences,m=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,x=m===void 0?0:m.length,g=r.get(o);if(g===void 0||g.count!==x){let _=function(){R.dispose(),r.delete(o),o.removeEventListener("dispose",_)};g!==void 0&&g.texture.dispose();let M=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;M===!0&&(b=1),S===!0&&(b=2),d===!0&&(b=3);let p=o.attributes.position.count*b,T=1;p>t.maxTextureSize&&(T=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let v=new Float32Array(p*T*4*x),R=new vs(v,p,T,x);R.type=qr,R.needsUpdate=!0;let f=b*4;for(let A=0;A<x;A++){let w=h[A],L=u[A],U=y[A],N=p*T*4*A;for(let F=0;F<w.count;F++){let j=F*f;M===!0&&(a.fromBufferAttribute(w,F),v[N+j+0]=a.x,v[N+j+1]=a.y,v[N+j+2]=a.z,v[N+j+3]=0),S===!0&&(a.fromBufferAttribute(L,F),v[N+j+4]=a.x,v[N+j+5]=a.y,v[N+j+6]=a.z,v[N+j+7]=0),d===!0&&(a.fromBufferAttribute(U,F),v[N+j+8]=a.x,v[N+j+9]=a.y,v[N+j+10]=a.z,v[N+j+11]=U.itemSize===4?a.w:1)}}g={count:x,texture:R,size:new Me(p,T)},r.set(o,g),o.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let M=0;for(let d=0;d<c.length;d++)M+=c[d];let S=o.morphTargetsRelative?1:1-M;l.getUniforms().setValue(e,"morphTargetBaseInfluence",S),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",g.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",g.size)}return{update:n}}function Xu(e,t,i,r,a){let n=new WeakMap;function s(c){let m=a.render.frame,x=c.geometry,g=t.get(c,x);if(n.get(g)!==m&&(t.update(g),n.set(g,m)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.get(c)!==m&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,m))),c.isSkinnedMesh){let M=c.skeleton;n.get(M)!==m&&(M.update(),n.set(M,m))}return g}function o(){n=new WeakMap}function l(c){let m=c.target;m.removeEventListener("dispose",l),r.releaseStatesOfObject(m),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:s,dispose:o}}var ju={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function qu(e,t,i,r,a,n){let s=new Gt(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new gt;c.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let m=new Kc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new st(c,m),g=new Ea(-1,1,1,-1,0,1),M=null,S=null,d=!1,h,u=null,y=[],b=!1;this.setSize=function(p,T){s.setSize(p,T),o!==null&&o.setSize(p,T),l!==null&&l.setSize(p,T);for(let v=0;v<y.length;v++){let R=y[v];R.setSize&&R.setSize(p,T)}},this.setEffects=function(p){y=p,b=y.length>0&&y[0].isRenderPass===!0;let T=s.width,v=s.height;y.length>0&&o===null&&(o=new Gt(T,v,{type:xi,depthBuffer:!1,stencilBuffer:!1}),l=new Gt(T,v,{type:xi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){let f=y[R];f.setSize&&f.setSize(T,v)}},this.begin=function(p,T){if(d||p.toneMapping===0&&y.length===0)return!1;if(u=T,T!==null){let v=T.width,R=T.height;(s.width!==v||s.height!==R)&&this.setSize(v,R)}return b===!1&&p.setRenderTarget(s),h=p.toneMapping,p.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(p,T){p.toneMapping=h,d=!0;let v=s,R=o;for(let f=0;f<y.length;f++){let _=y[f];_.enabled!==!1&&(_.render(p,R,v,T),_.needsSwap!==!1&&(v=R,R=R===o?l:o))}if(M!==p.outputColorSpace||S!==p.toneMapping){M=p.outputColorSpace,S=p.toneMapping,m.defines={},it.getTransfer(M)==="srgb"&&(m.defines.SRGB_TRANSFER="");let f=ju[S];f&&(m.defines[f]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=v.texture,p.setRenderTarget(u),p.render(x,g),u=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),m.dispose()}}var Mo=new Ht,Nn=new Lr(1,1),yo=new vs,bo=new Zh,To=new Us,Eo=[],wo=[],Ao=new Float32Array(16),Ro=new Float32Array(9),Co=new Float32Array(4);function dr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Eo[a];if(n===void 0&&(n=new Float32Array(a),Eo[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Tt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Et(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Ra(e,t){let i=wo[t];i===void 0&&(i=new Int32Array(t),wo[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Yu(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Zu(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2fv(this.addr,t),Et(i,t)}}function Ju(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Tt(i,t))return;e.uniform3fv(this.addr,t),Et(i,t)}}function Ku(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4fv(this.addr,t),Et(i,t)}}function $u(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Et(i,t)}else{if(Tt(i,r))return;Co.set(r),e.uniformMatrix2fv(this.addr,!1,Co),Et(i,r)}}function Qu(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Et(i,t)}else{if(Tt(i,r))return;Ro.set(r),e.uniformMatrix3fv(this.addr,!1,Ro),Et(i,r)}}function ed(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Et(i,t)}else{if(Tt(i,r))return;Ao.set(r),e.uniformMatrix4fv(this.addr,!1,Ao),Et(i,r)}}function td(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function id(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2iv(this.addr,t),Et(i,t)}}function rd(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tt(i,t))return;e.uniform3iv(this.addr,t),Et(i,t)}}function ad(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4iv(this.addr,t),Et(i,t)}}function nd(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function sd(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2uiv(this.addr,t),Et(i,t)}}function od(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tt(i,t))return;e.uniform3uiv(this.addr,t),Et(i,t)}}function ld(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4uiv(this.addr,t),Et(i,t)}}function hd(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(Nn.compareFunction=i.isReversedDepthBuffer()?518:515,n=Nn):n=Mo,i.setTexture2D(t||n,a)}function cd(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||bo,a)}function ud(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||To,a)}function dd(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||yo,a)}function pd(e){switch(e){case 5126:return Yu;case 35664:return Zu;case 35665:return Ju;case 35666:return Ku;case 35674:return $u;case 35675:return Qu;case 35676:return ed;case 5124:case 35670:return td;case 35667:case 35671:return id;case 35668:case 35672:return rd;case 35669:case 35673:return ad;case 5125:return nd;case 36294:return sd;case 36295:return od;case 36296:return ld;case 35678:case 36198:case 36298:case 36306:case 35682:return hd;case 35679:case 36299:case 36307:return cd;case 35680:case 36300:case 36308:case 36293:return ud;case 36289:case 36303:case 36311:case 36292:return dd}}function fd(e,t){e.uniform1fv(this.addr,t)}function md(e,t){let i=dr(t,this.size,2);e.uniform2fv(this.addr,i)}function gd(e,t){let i=dr(t,this.size,3);e.uniform3fv(this.addr,i)}function vd(e,t){let i=dr(t,this.size,4);e.uniform4fv(this.addr,i)}function _d(e,t){let i=dr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function xd(e,t){let i=dr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Sd(e,t){let i=dr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Md(e,t){e.uniform1iv(this.addr,t)}function yd(e,t){e.uniform2iv(this.addr,t)}function bd(e,t){e.uniform3iv(this.addr,t)}function Td(e,t){e.uniform4iv(this.addr,t)}function Ed(e,t){e.uniform1uiv(this.addr,t)}function wd(e,t){e.uniform2uiv(this.addr,t)}function Ad(e,t){e.uniform3uiv(this.addr,t)}function Rd(e,t){e.uniform4uiv(this.addr,t)}function Cd(e,t,i){let r=this.cache,a=t.length,n=Ra(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),Et(r,n));let s;s=this.type===e.SAMPLER_2D_SHADOW?Nn:Mo;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function Pd(e,t,i){let r=this.cache,a=t.length,n=Ra(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),Et(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||bo,n[s])}function Ld(e,t,i){let r=this.cache,a=t.length,n=Ra(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),Et(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||To,n[s])}function Nd(e,t,i){let r=this.cache,a=t.length,n=Ra(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),Et(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||yo,n[s])}function Id(e){switch(e){case 5126:return fd;case 35664:return md;case 35665:return gd;case 35666:return vd;case 35674:return _d;case 35675:return xd;case 35676:return Sd;case 5124:case 35670:return Md;case 35667:case 35671:return yd;case 35668:case 35672:return bd;case 35669:case 35673:return Td;case 5125:return Ed;case 36294:return wd;case 36295:return Ad;case 36296:return Rd;case 35678:case 36198:case 36298:case 36306:case 35682:return Cd;case 35679:case 36299:case 36307:return Pd;case 35680:case 36300:case 36308:case 36293:return Ld;case 36289:case 36303:case 36311:case 36292:return Nd}}var Ud=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pd(t.type)}},Dd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Id(t.type)}},Od=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},In=/(\w+)(\])?(\[|\.)?/g;function Po(e,t){e.seq.push(t),e.map[t.id]=t}function Fd(e,t,i){let r=e.name,a=r.length;for(In.lastIndex=0;;){let n=In.exec(r),s=In.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o|=0),c===void 0||c==="["&&s+2===a){Po(i,c===void 0?new Ud(o,e,t):new Dd(o,e,t));break}else{let m=i.map[o];m===void 0&&(m=new Od(o),Po(i,m)),i=m}}}var Ca=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);Fd(s,e.getUniformLocation(t,s.name),this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function Lo(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var Bd=37297,zd=0;function Vd(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var No=new qe;function kd(e){it._getMatrix(No,it.workingColorSpace,e);let t=`mat3( ${No.elements.map(i=>i.toFixed(4))} )`;switch(it.getTransfer(e)){case Jr:return[t,"LinearTransferOETF"];case Kr:return[t,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Io(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+Vd(e.getShaderSource(t),s)}else return a}function Hd(e,t){let i=kd(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Gd={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function Wd(e,t){let i=Gd[t];return i===void 0?(We("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Pa=new O;function Xd(){return it.getLuminanceCoefficients(Pa),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Pa.x.toFixed(4)}, ${Pa.y.toFixed(4)}, ${Pa.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jd(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function qd(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Yd(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Gr(e){return e!==""}function Uo(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Do(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Un(e){return e.replace(Zd,Kd)}var Jd=new Map;function Kd(e,t){let i=Je[t];if(i===void 0){let r=Jd.get(t);if(r!==void 0)i=Je[r],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Un(i)}var $d=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oo(e){return e.replace($d,Qd)}function Qd(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Fo(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ep={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function tp(e){return ep[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ip={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function rp(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":ip[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var ap={302:"ENVMAP_MODE_REFRACTION"};function np(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":ap[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sp={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function op(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":sp[e.combine]||"ENVMAP_BLENDING_NONE"}function lp(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**i,112)),texelHeight:r,maxMip:i}}function hp(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=tp(i),c=rp(i),m=np(i),x=op(i),g=lp(i),M=jd(i),S=qd(n),d=a.createProgram(),h,u,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(h=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(Gr).join(`
`),h.length>0&&(h+=`
`),u=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(Gr).join(`
`),u.length>0&&(u+=`
`)):(h=[Fo(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),u=[Fo(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+m:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping===0?"":"#define TONE_MAPPING",i.toneMapping===0?"":Je.tonemapping_pars_fragment,i.toneMapping===0?"":Wd("toneMapping",i.toneMapping),i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Hd("linearToOutputTexel",i.outputColorSpace),Xd(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Gr).join(`
`)),s=Un(s),s=Uo(s,i),s=Do(s,i),o=Un(o),o=Uo(o,i),o=Do(o,i),s=Oo(s),o=Oo(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,u=["#define varying in",i.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let b=y+h+s,p=y+u+o,T=Lo(a,a.VERTEX_SHADER,b),v=Lo(a,a.FRAGMENT_SHADER,p);a.attachShader(d,T),a.attachShader(d,v),i.index0AttributeName===void 0?i.hasPositionAttribute===!0&&a.bindAttribLocation(d,0,"position"):a.bindAttribLocation(d,0,i.index0AttributeName),a.linkProgram(d);function R(w){if(e.debug.checkShaderErrors){let L=a.getProgramInfoLog(d)||"",U=a.getShaderInfoLog(T)||"",N=a.getShaderInfoLog(v)||"",F=L.trim(),j=U.trim(),W=N.trim(),ee=!0,q=!0;if(a.getProgramParameter(d,a.LINK_STATUS)===!1)if(ee=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,d,T,v);else{let $=Io(a,T,"vertex"),k=Io(a,v,"fragment");je("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(d,a.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+$+`
`+k)}else F===""?(j===""||W==="")&&(q=!1):We("WebGLProgram: Program Info Log:",F);q&&(w.diagnostics={runnable:ee,programLog:F,vertexShader:{log:j,prefix:h},fragmentShader:{log:W,prefix:u}})}a.deleteShader(T),a.deleteShader(v),f=new Ca(a,d),_=Yd(a,d)}let f;this.getUniforms=function(){return f===void 0&&R(this),f};let _;this.getAttributes=function(){return _===void 0&&R(this),_};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(d,Bd)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(d),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=zd++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=T,this.fragmentShader=v,this}var cp=0,up=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new dp(e),t.set(e,i)),i}},dp=class{constructor(e){this.id=cp++,this.code=e,this.usedTimes=0}};function pp(e){return e===1030||e===37490||e===36285}function fp(e,t,i,r,a,n){let s=new Ss,o=new up,l=new Set,c=[],m=new Map,x=r.logarithmicDepthBuffer,g=r.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(f){return l.add(f),f===0?"uv":`uv${f}`}function d(f,_,A,w,L,U){let N=w.fog,F=L.geometry,j=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?w.environment:null,W=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,ee=t.get(f.envMap||j,W),q=ee&&ee.mapping===306?ee.image.height:null,$=M[f.type];f.precision!==null&&(g=r.getMaxPrecision(f.precision),g!==f.precision&&We("WebGLProgram.getParameters:",f.precision,"not supported, using",g,"instead."));let k=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Te=k===void 0?0:k.length,ge=0;F.morphAttributes.position!==void 0&&(ge=1),F.morphAttributes.normal!==void 0&&(ge=2),F.morphAttributes.color!==void 0&&(ge=3);let Ke,He,ie,oe;if($){let bt=si[$];Ke=bt.vertexShader,He=bt.fragmentShader}else{Ke=f.vertexShader,He=f.fragmentShader;let bt=o.getVertexShaderStage(f),ot=o.getFragmentShaderStage(f);o.update(f,bt,ot),ie=bt.id,oe=ot.id}let de=e.getRenderTarget(),De=e.state.buffers.depth.getReversed(),ze=L.isInstancedMesh===!0,_e=L.isBatchedMesh===!0,Ze=!!f.map,ne=!!f.matcap,re=!!ee,fe=!!f.aoMap,Ae=!!f.lightMap,Re=!!f.bumpMap&&f.wireframe===!1,Z=!!f.normalMap,H=!!f.displacementMap,te=!!f.emissiveMap,J=!!f.metalnessMap,I=!!f.roughnessMap,Se=f.anisotropy>0,le=f.clearcoat>0,ye=f.dispersion>0,P=f.retroreflectivity>0,E=f.iridescence>0,D=f.sheen>0,G=f.transmission>0,K=Se&&!!f.anisotropyMap,se=le&&!!f.clearcoatMap,ve=le&&!!f.clearcoatNormalMap,z=le&&!!f.clearcoatRoughnessMap,ce=E&&!!f.iridescenceMap,me=E&&!!f.iridescenceThicknessMap,Ee=D&&!!f.sheenColorMap,he=D&&!!f.sheenRoughnessMap,Ne=!!f.specularMap,Fe=!!f.specularColorMap,Ve=!!f.specularIntensityMap,tt=G&&!!f.transmissionMap,V=G&&!!f.thicknessMap,ae=!!f.gradientMap,ue=!!f.alphaMap,Pe=f.alphaTest>0,Oe=!!f.alphaHash,pe=!!f.extensions,Ce=0;f.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ce=e.toneMapping);let Xe={shaderID:$,shaderType:f.type,shaderName:f.name,vertexShader:Ke,fragmentShader:He,defines:f.defines,customVertexShaderID:ie,customFragmentShaderID:oe,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:g,batching:_e,batchingColor:_e&&L._colorsTexture!==null,instancing:ze,instancingColor:ze&&L.instanceColor!==null,instancingMorph:ze&&L.morphTexture!==null,outputColorSpace:de===null?e.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:Ze,matcap:ne,envMap:re,envMapMode:re&&ee.mapping,envMapCubeUVHeight:q,aoMap:fe,lightMap:Ae,bumpMap:Re,normalMap:Z,displacementMap:H,emissiveMap:te,normalMapObjectSpace:Z&&f.normalMapType===1,normalMapTangentSpace:Z&&f.normalMapType===0,packedNormalMap:Z&&f.normalMapType===0&&pp(f.normalMap.format),metalnessMap:J,roughnessMap:I,anisotropy:Se,anisotropyMap:K,clearcoat:le,clearcoatMap:se,clearcoatNormalMap:ve,clearcoatRoughnessMap:z,dispersion:ye,retroreflection:P,iridescence:E,iridescenceMap:ce,iridescenceThicknessMap:me,sheen:D,sheenColorMap:Ee,sheenRoughnessMap:he,specularMap:Ne,specularColorMap:Fe,specularIntensityMap:Ve,transmission:G,transmissionMap:tt,thicknessMap:V,gradientMap:ae,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:ue,alphaTest:Pe,alphaHash:Oe,combine:f.combine,mapUv:Ze&&S(f.map.channel),aoMapUv:fe&&S(f.aoMap.channel),lightMapUv:Ae&&S(f.lightMap.channel),bumpMapUv:Re&&S(f.bumpMap.channel),normalMapUv:Z&&S(f.normalMap.channel),displacementMapUv:H&&S(f.displacementMap.channel),emissiveMapUv:te&&S(f.emissiveMap.channel),metalnessMapUv:J&&S(f.metalnessMap.channel),roughnessMapUv:I&&S(f.roughnessMap.channel),anisotropyMapUv:K&&S(f.anisotropyMap.channel),clearcoatMapUv:se&&S(f.clearcoatMap.channel),clearcoatNormalMapUv:ve&&S(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&S(f.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&S(f.iridescenceMap.channel),iridescenceThicknessMapUv:me&&S(f.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&S(f.sheenColorMap.channel),sheenRoughnessMapUv:he&&S(f.sheenRoughnessMap.channel),specularMapUv:Ne&&S(f.specularMap.channel),specularColorMapUv:Fe&&S(f.specularColorMap.channel),specularIntensityMapUv:Ve&&S(f.specularIntensityMap.channel),transmissionMapUv:tt&&S(f.transmissionMap.channel),thicknessMapUv:V&&S(f.thicknessMap.channel),alphaMapUv:ue&&S(f.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Z||Se),vertexNormals:!!F.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Ze||ue),fog:!!N,useFog:f.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||F.attributes.normal===void 0&&Z===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:De,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ge,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:f.dithering,shadowMapEnabled:e.shadowMap.enabled&&A.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Ze&&f.map.isVideoTexture===!0&&it.getTransfer(f.map.colorSpace)==="srgb",decodeVideoTextureEmissive:te&&f.emissiveMap.isVideoTexture===!0&&it.getTransfer(f.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===1,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:pe&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&f.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function h(f){let _=[];if(f.shaderID?_.push(f.shaderID):(_.push(f.customVertexShaderID),_.push(f.customFragmentShaderID)),f.defines!==void 0)for(let A in f.defines)_.push(A),_.push(f.defines[A]);return f.isRawShaderMaterial===!1&&(u(_,f),y(_,f),_.push(e.outputColorSpace)),_.push(f.customProgramCacheKey),_.join()}function u(f,_){f.push(_.precision),f.push(_.outputColorSpace),f.push(_.envMapMode),f.push(_.envMapCubeUVHeight),f.push(_.mapUv),f.push(_.alphaMapUv),f.push(_.lightMapUv),f.push(_.aoMapUv),f.push(_.bumpMapUv),f.push(_.normalMapUv),f.push(_.displacementMapUv),f.push(_.emissiveMapUv),f.push(_.metalnessMapUv),f.push(_.roughnessMapUv),f.push(_.anisotropyMapUv),f.push(_.clearcoatMapUv),f.push(_.clearcoatNormalMapUv),f.push(_.clearcoatRoughnessMapUv),f.push(_.iridescenceMapUv),f.push(_.iridescenceThicknessMapUv),f.push(_.sheenColorMapUv),f.push(_.sheenRoughnessMapUv),f.push(_.specularMapUv),f.push(_.specularColorMapUv),f.push(_.specularIntensityMapUv),f.push(_.transmissionMapUv),f.push(_.thicknessMapUv),f.push(_.combine),f.push(_.fogExp2),f.push(_.sizeAttenuation),f.push(_.morphTargetsCount),f.push(_.morphAttributeCount),f.push(_.numSunLights),f.push(_.numDirLights),f.push(_.numPointLights),f.push(_.numSpotLights),f.push(_.numSpotLightMaps),f.push(_.numHemiLights),f.push(_.numRectAreaLights),f.push(_.numSunLightShadows),f.push(_.numDirLightShadows),f.push(_.numPointLightShadows),f.push(_.numSpotLightShadows),f.push(_.numSpotLightShadowsWithMaps),f.push(_.numLightProbes),f.push(_.shadowMapType),f.push(_.toneMapping),f.push(_.numClippingPlanes),f.push(_.numClipIntersection),f.push(_.depthPacking)}function y(f,_){s.disableAll(),_.instancing&&s.enable(0),_.instancingColor&&s.enable(1),_.instancingMorph&&s.enable(2),_.matcap&&s.enable(3),_.envMap&&s.enable(4),_.normalMapObjectSpace&&s.enable(5),_.normalMapTangentSpace&&s.enable(6),_.clearcoat&&s.enable(7),_.iridescence&&s.enable(8),_.alphaTest&&s.enable(9),_.vertexColors&&s.enable(10),_.vertexAlphas&&s.enable(11),_.vertexUv1s&&s.enable(12),_.vertexUv2s&&s.enable(13),_.vertexUv3s&&s.enable(14),_.vertexTangents&&s.enable(15),_.anisotropy&&s.enable(16),_.alphaHash&&s.enable(17),_.batching&&s.enable(18),_.dispersion&&s.enable(19),_.retroreflection&&s.enable(24),_.batchingColor&&s.enable(20),_.gradientMap&&s.enable(21),_.packedNormalMap&&s.enable(22),_.vertexNormals&&s.enable(23),f.push(s.mask),s.disableAll(),_.fog&&s.enable(0),_.useFog&&s.enable(1),_.flatShading&&s.enable(2),_.logarithmicDepthBuffer&&s.enable(3),_.reversedDepthBuffer&&s.enable(4),_.skinning&&s.enable(5),_.morphTargets&&s.enable(6),_.morphNormals&&s.enable(7),_.morphColors&&s.enable(8),_.premultipliedAlpha&&s.enable(9),_.shadowMapEnabled&&s.enable(10),_.doubleSided&&s.enable(11),_.flipSided&&s.enable(12),_.useDepthPacking&&s.enable(13),_.dithering&&s.enable(14),_.transmission&&s.enable(15),_.sheen&&s.enable(16),_.opaque&&s.enable(17),_.pointsUvs&&s.enable(18),_.decodeVideoTexture&&s.enable(19),_.decodeVideoTextureEmissive&&s.enable(20),_.alphaToCoverage&&s.enable(21),_.numLightProbeGrids>0&&s.enable(22),_.hasPositionAttribute&&s.enable(23),f.push(s.mask)}function b(f){let _=M[f.type],A;if(_){let w=si[_];A=Yc.clone(w.uniforms)}else A=f.uniforms;return A}function p(f,_){let A=m.get(_);return A===void 0?(A=new hp(e,_,f,a),c.push(A),m.set(_,A)):++A.usedTimes,A}function T(f){if(--f.usedTimes===0){let _=c.indexOf(f);c[_]=c[c.length-1],c.pop(),m.delete(f.cacheKey),f.destroy()}}function v(f){o.remove(f)}function R(){o.dispose()}return{getParameters:d,getProgramCacheKey:h,getUniforms:b,acquireProgram:p,releaseProgram:T,releaseShaderCache:v,programs:c,dispose:R}}function mp(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function gp(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Bo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function zo(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function o(g,M,S,d,h,u){let y=e[t];return y===void 0?(y={id:g.id,object:g,geometry:M,material:S,materialVariant:s(g),groupOrder:d,renderOrder:g.renderOrder,z:h,group:u},e[t]=y):(y.id=g.id,y.object=g,y.geometry=M,y.material=S,y.materialVariant=s(g),y.groupOrder=d,y.renderOrder=g.renderOrder,y.z=h,y.group=u),t++,y}function l(g,M,S,d,h,u,y){y.reversedDepth===!0&&(h=-h);let b=o(g,M,S,d,h,u);S.transmission>0?r.push(b):S.transparent===!0?a.push(b):i.push(b)}function c(g,M,S,d,h,u){let y=o(g,M,S,d,h,u);S.transmission>0?r.unshift(y):S.transparent===!0?a.unshift(y):i.unshift(y)}function m(g,M){i.length>1&&i.sort(g||gp),r.length>1&&r.sort(M||Bo),a.length>1&&a.sort(M||Bo)}function x(){for(let g=t,M=e.length;g<M;g++){let S=e[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:c,finish:x,sort:m}}function vp(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new zo,e.set(r,[s])):a>=n.length?(s=new zo,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function _p(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new O,color:new et};break;case"SpotLight":i={position:new O,direction:new O,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new O,color:new et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new O,skyColor:new et,groundColor:new et};break;case"RectAreaLight":i={color:new et,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=i,i}}}function xp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var Sp=0;function Mp(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function yp(e){let t=new _p,i=xp(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new O);let a=new O,n=new mt,s=new mt;function o(c){let m=0,x=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,S=0,d=0,h=0,u=0,y=0,b=0,p=0,T=0,v=0,R=0,f=0,_=0,A=0;c.sort(Mp);for(let L=0,U=c.length;L<U;L++){let N=c[L],F=N.color,j=N.intensity,W=N.distance,ee=null;if(N.shadow&&N.shadow.map&&(ee=N.shadow.map.texture.format===1030?N.shadow.map.texture:N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)m+=F.r*j,x+=F.g*j,g+=F.b*j;else if(N.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(N.sh.coefficients[q],j);A++}else if(N.isSunLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,k=i.get(N);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[S]=k,r.sunShadowMap[S]=ee;let Te=$.getViewportCount();for(let ge=0;ge<Te;ge++)r.sunShadowMatrix[d+ge]=$.getMatrix(ge),r.sunShadowCascade[d+ge]=$._cascadeData[ge];d+=Te,S++}r.sun[M]=q,M++}else if(N.isDirectionalLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,k=i.get(N);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,r.directionalShadow[h]=k,r.directionalShadowMap[h]=ee,r.directionalShadowMatrix[h]=N.shadow.matrix,T++}r.directional[h]=q,h++}else if(N.isSpotLight){let q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(F).multiplyScalar(j),q.distance=W,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,r.spot[y]=q;let $=N.shadow;if(N.map&&(r.spotLightMap[f]=N.map,f++,$.updateMatrices(N),N.castShadow&&_++),r.spotLightMatrix[y]=$.matrix,N.castShadow){let k=i.get(N);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,r.spotShadow[y]=k,r.spotShadowMap[y]=ee,R++}y++}else if(N.isRectAreaLight){let q=t.get(N);q.color.copy(F).multiplyScalar(j),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),r.rectArea[b]=q,b++}else if(N.isPointLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let $=N.shadow,k=i.get(N);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,r.pointShadow[u]=k,r.pointShadowMap[u]=ee,r.pointShadowMatrix[u]=N.shadow.matrix,v++}r.point[u]=q,u++}else if(N.isHemisphereLight){let q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(j),q.groundColor.copy(N.groundColor).multiplyScalar(j),r.hemi[p]=q,p++}}b>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=x,r.ambient[2]=g;let w=r.hash;(w.sunLength!==M||w.directionalLength!==h||w.pointLength!==u||w.spotLength!==y||w.rectAreaLength!==b||w.hemiLength!==p||w.numSunShadows!==S||w.numDirectionalShadows!==T||w.numPointShadows!==v||w.numSpotShadows!==R||w.numSpotMaps!==f||w.numLightProbes!==A)&&(r.sun.length=M,r.directional.length=h,r.spot.length=y,r.rectArea.length=b,r.point.length=u,r.hemi.length=p,r.sunShadow.length=S,r.sunShadowMap.length=S,r.sunShadowMatrix.length=d,r.sunShadowCascade.length=d,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=v,r.pointShadowMap.length=v,r.pointShadowMatrix.length=v,r.spotShadow.length=R,r.spotShadowMap.length=R,r.spotLightMatrix.length=R+f-_,r.spotLightMap.length=f,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=A,w.sunLength=M,w.directionalLength=h,w.pointLength=u,w.spotLength=y,w.rectAreaLength=b,w.hemiLength=p,w.numSunShadows=S,w.numDirectionalShadows=T,w.numPointShadows=v,w.numSpotShadows=R,w.numSpotMaps=f,w.numLightProbes=A,r.version=Sp++)}function l(c,m){let x=0,g=0,M=0,S=0,d=0,h=0,u=m.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let p=c[y];if(p.isSunLight){let T=r.sun[x];T.direction.setFromMatrixPosition(p.matrixWorld),T.direction.transformDirection(u),x++}else if(p.isDirectionalLight){let T=r.directional[g];T.direction.setFromMatrixPosition(p.matrixWorld),a.setFromMatrixPosition(p.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(u),g++}else if(p.isSpotLight){let T=r.spot[S];T.position.setFromMatrixPosition(p.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(p.matrixWorld),a.setFromMatrixPosition(p.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(u),S++}else if(p.isRectAreaLight){let T=r.rectArea[d];T.position.setFromMatrixPosition(p.matrixWorld),T.position.applyMatrix4(u),s.identity(),n.copy(p.matrixWorld),n.premultiply(u),s.extractRotation(n),T.halfWidth.set(p.width*.5,0,0),T.halfHeight.set(0,p.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),d++}else if(p.isPointLight){let T=r.point[M];T.position.setFromMatrixPosition(p.matrixWorld),T.position.applyMatrix4(u),M++}else if(p.isHemisphereLight){let T=r.hemi[h];T.direction.setFromMatrixPosition(p.matrixWorld),T.direction.transformDirection(u),h++}}}return{setup:o,setupView:l,state:r}}function Vo(e){let t=new yp(e),i=[],r=[],a=[];function n(g){x.camera=g,i.length=0,r.length=0,a.length=0}function s(g){i.push(g)}function o(g){r.push(g)}function l(g){a.push(g)}function c(){t.setup(i)}function m(g){t.setupView(i,g)}let x={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:x,setupLights:c,setupLightsView:m,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function bp(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Vo(e),t.set(a,[o])):n>=s.length?(o=new Vo(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var Tp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ep=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wp=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Ap=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],ko=new mt,Wr=new O,Dn=new O;function Rp(e,t,i){let r=new fn,a=new Me,n=new Me,s=new St,o=new bn,l=new $c,c={},m=i.maxTextureSize,x={0:1,1:0,2:2},g=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Tp,fragmentShader:Ep}),M=g.clone();M.defines.HORIZONTAL_PASS=1;let S=new gt;S.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let d=new st(S,g),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let u=this.type;this.render=function(v,R,f){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||v.length===0)return;this.type===2&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);let _=e.getRenderTarget(),A=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),L=e.state;L.setBlending(0),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=u!==this.type;U&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(F=>F.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,F=v.length;N<F;N++){let j=v[N],W=j.shadow;if(W===void 0){We("WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);let ee=W.getFrameExtents();a.multiply(ee),n.copy(W.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(n.x=Math.floor(m/ee.x),a.x=n.x*ee.x,W.mapSize.x=n.x),a.y>m&&(n.y=Math.floor(m/ee.y),a.y=n.y*ee.y,W.mapSize.y=n.y));let q=e.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||U===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===3){if(j.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Gt(a.x,a.y,{format:Yr,type:xi,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),W.map.texture.name=j.name+".shadowMap",W.map.depthTexture=new Lr(a.x,a.y,qr),W.map.depthTexture.name=j.name+".shadowMapDepth",W.map.depthTexture.format=xr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nt,W.map.depthTexture.magFilter=Nt}else j.isPointLight?(W.map=new So(a.x),W.map.depthTexture=new fc(a.x,Ci)):(W.map=new Gt(a.x,a.y),W.map.depthTexture=new Lr(a.x,a.y,Ci)),W.map.depthTexture.name=j.name+".shadowMap",W.map.depthTexture.format=xr,this.type===1?(W.map.depthTexture.compareFunction=q?518:515,W.map.depthTexture.minFilter=Ft,W.map.depthTexture.magFilter=Ft):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nt,W.map.depthTexture.magFilter=Nt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==a.x||W.map.height!==a.y)&&W.map.setSize(a.x,a.y);let $=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();j.isPointLight!==!0&&W.updateMatrices(j,f);for(let k=0;k<$;k++){let Te=W.getCamera(k);if(j.isPointLight){let ge=W.camera,Ke=W.matrix,He=j.distance||ge.far;He!==ge.far&&(ge.far=He,ge.updateProjectionMatrix()),Wr.setFromMatrixPosition(j.matrixWorld),ge.position.copy(Wr),Dn.copy(ge.position),Dn.add(wp[k]),ge.up.copy(Ap[k]),ge.lookAt(Dn),ge.updateMatrixWorld(),Ke.makeTranslation(-Wr.x,-Wr.y,-Wr.z),ko.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),W._frustum.setFromProjectionMatrix(ko,ge.coordinateSystem,ge.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)e.setRenderTarget(W.map,k),e.clear();else{k===0&&(e.setRenderTarget(W.map),e.clear());let ge=W.getViewport(k);s.set(n.x*ge.x,n.y*ge.y,n.x*ge.z,n.y*ge.w),L.viewport(s)}r=W.getFrustum(k),p(R,f,Te,j,this.type)}W.isPointLightShadow!==!0&&this.type===3&&y(W,f),W.needsUpdate=!1}u=this.type,h.needsUpdate=!1,e.setRenderTarget(_,A,w)};function y(v,R){let f=t.update(d);g.defines.VSM_SAMPLES!==v.blurSamples&&(g.defines.VSM_SAMPLES=v.blurSamples,M.defines.VSM_SAMPLES=v.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),v.mapPass===null?v.mapPass=new Gt(a.x,a.y,{format:Yr,type:xi}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),g.uniforms.shadow_pass.value=v.map.depthTexture,g.uniforms.resolution.value.set(v.map.width,v.map.height),g.uniforms.radius.value=v.radius,e.setRenderTarget(v.mapPass),e.clear(),e.renderBufferDirect(R,null,f,g,d,null),M.uniforms.shadow_pass.value=v.mapPass.texture,M.uniforms.resolution.value.set(v.map.width,v.map.height),M.uniforms.radius.value=v.radius,e.setRenderTarget(v.map),e.clear(),e.renderBufferDirect(R,null,f,M,d,null)}function b(v,R,f,_){let A=null,w=f.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(w!==void 0)A=w;else if(A=f.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let L=A.uuid,U=R.uuid,N=c[L];N===void 0&&(N={},c[L]=N);let F=N[U];F===void 0&&(F=A.clone(),N[U]=F,R.addEventListener("dispose",T)),A=F}if(A.visible=R.visible,A.wireframe=R.wireframe,_===3?A.side=R.shadowSide===null?R.side:R.shadowSide:A.side=R.shadowSide===null?x[R.side]:R.shadowSide,A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,f.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=e.properties.get(A);L.light=f}return A}function p(v,R,f,_,A){if(v.visible===!1)return;if(v.layers.test(R.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&A===3)&&(!v.frustumCulled||v.intersectsFrustum(r))){v.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,v.matrixWorld);let L=t.update(v),U=v.material;if(Array.isArray(U)){let N=L.groups;for(let F=0,j=N.length;F<j;F++){let W=N[F],ee=U[W.materialIndex];if(ee&&ee.visible){let q=b(v,ee,_,A);v.onBeforeShadow(e,v,R,f,L,q,W),e.renderBufferDirect(f,null,L,q,v,W),v.onAfterShadow(e,v,R,f,L,q,W)}}}else if(U.visible){let N=b(v,U,_,A);v.onBeforeShadow(e,v,R,f,L,N,null),e.renderBufferDirect(f,null,L,N,v,null),v.onAfterShadow(e,v,R,f,L,N,null)}}let w=v.children;for(let L=0,U=w.length;L<U;L++)p(w[L],R,f,_,A)}function T(v){v.target.removeEventListener("dispose",T);for(let R in c){let f=c[R],_=v.target.uuid;_ in f&&(f[_].dispose(),delete f[_])}}}function Cp(e,t){function i(){let V=!1,ae=new St,ue=null,Pe=new St(0,0,0,0);return{setMask:function(Oe){ue!==Oe&&!V&&(e.colorMask(Oe,Oe,Oe,Oe),ue=Oe)},setLocked:function(Oe){V=Oe},setClear:function(Oe,pe,Ce,Xe,bt){bt===!0&&(Oe*=Xe,pe*=Xe,Ce*=Xe),ae.set(Oe,pe,Ce,Xe),Pe.equals(ae)===!1&&(e.clearColor(Oe,pe,Ce,Xe),Pe.copy(ae))},reset:function(){V=!1,ue=null,Pe.set(-1,0,0,0)}}}function r(){let V=!1,ae=!1,ue=null,Pe=null,Oe=null;return{setReversed:function(pe){if(ae!==pe){let Ce=t.get("EXT_clip_control");pe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ae=pe;let Xe=Oe;Oe=null,this.setClear(Xe)}},getReversed:function(){return ae},setTest:function(pe){pe?de(e.DEPTH_TEST):De(e.DEPTH_TEST)},setMask:function(pe){ue!==pe&&!V&&(e.depthMask(pe),ue=pe)},setFunc:function(pe){if(ae&&(pe=Ah[pe]),Pe!==pe){switch(pe){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Pe=pe}},setLocked:function(pe){V=pe},setClear:function(pe){Oe!==pe&&(Oe=pe,ae&&(pe=1-pe),e.clearDepth(pe))},reset:function(){V=!1,ue=null,Pe=null,Oe=null,ae=!1}}}function a(){let V=!1,ae=null,ue=null,Pe=null,Oe=null,pe=null,Ce=null,Xe=null,bt=null;return{setTest:function(ot){V||(ot?de(e.STENCIL_TEST):De(e.STENCIL_TEST))},setMask:function(ot){ae!==ot&&!V&&(e.stencilMask(ot),ae=ot)},setFunc:function(ot,Qt,li){(ue!==ot||Pe!==Qt||Oe!==li)&&(e.stencilFunc(ot,Qt,li),ue=ot,Pe=Qt,Oe=li)},setOp:function(ot,Qt,li){(pe!==ot||Ce!==Qt||Xe!==li)&&(e.stencilOp(ot,Qt,li),pe=ot,Ce=Qt,Xe=li)},setLocked:function(ot){V=ot},setClear:function(ot){bt!==ot&&(e.clearStencil(ot),bt=ot)},reset:function(){V=!1,ae=null,ue=null,Pe=null,Oe=null,pe=null,Ce=null,Xe=null,bt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,c=new WeakMap,m={},x={},g={},M=new WeakMap,S=[],d=null,h=!1,u=null,y=null,b=null,p=null,T=null,v=null,R=null,f=new et(0,0,0),_=0,A=!1,w=null,L=null,U=null,N=null,F=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ee=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")===-1?q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=ee>=1);let $=null,k={},Te=e.getParameter(e.SCISSOR_BOX),ge=e.getParameter(e.VIEWPORT),Ke=new St().fromArray(Te),He=new St().fromArray(ge);function ie(V,ae,ue,Pe){let Oe=new Uint8Array(4),pe=e.createTexture();e.bindTexture(V,pe),e.texParameteri(V,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(V,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ce=0;Ce<ue;Ce++)V===e.TEXTURE_3D||V===e.TEXTURE_2D_ARRAY?e.texImage3D(ae,0,e.RGBA,1,1,Pe,0,e.RGBA,e.UNSIGNED_BYTE,Oe):e.texImage2D(ae+Ce,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Oe);return pe}let oe={};oe[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(e.DEPTH_TEST),s.setFunc(3),Re(!1),Z(1),de(e.CULL_FACE),fe(0);function de(V){m[V]!==!0&&(e.enable(V),m[V]=!0)}function De(V){m[V]!==!1&&(e.disable(V),m[V]=!1)}function ze(V,ae){return g[V]===ae?!1:(e.bindFramebuffer(V,ae),g[V]=ae,V===e.DRAW_FRAMEBUFFER&&(g[e.FRAMEBUFFER]=ae),V===e.FRAMEBUFFER&&(g[e.DRAW_FRAMEBUFFER]=ae),!0)}function _e(V,ae){let ue=S,Pe=!1;if(V){ue=M.get(ae),ue===void 0&&(ue=[],M.set(ae,ue));let Oe=V.textures;if(ue.length!==Oe.length||ue[0]!==e.COLOR_ATTACHMENT0){for(let pe=0,Ce=Oe.length;pe<Ce;pe++)ue[pe]=e.COLOR_ATTACHMENT0+pe;ue.length=Oe.length,Pe=!0}}else ue[0]!==e.BACK&&(ue[0]=e.BACK,Pe=!0);Pe&&e.drawBuffers(ue)}function Ze(V){return d===V?!1:(e.useProgram(V),d=V,!0)}let ne={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ne[103]=e.MIN,ne[104]=e.MAX;let re={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(V,ae,ue,Pe,Oe,pe,Ce,Xe,bt,ot){if(V===0){h===!0&&(De(e.BLEND),h=!1);return}if(h===!1&&(de(e.BLEND),h=!0),V!==5){if(V!==u||ot!==A){if((y!==100||T!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,T=100),ot)switch(V){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:je("WebGLState: Invalid blending: ",V);break}else switch(V){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",V);break}b=null,p=null,v=null,R=null,f.set(0,0,0),_=0,u=V,A=ot}return}Oe||=ae,pe||=ue,Ce||=Pe,(ae!==y||Oe!==T)&&(e.blendEquationSeparate(ne[ae],ne[Oe]),y=ae,T=Oe),(ue!==b||Pe!==p||pe!==v||Ce!==R)&&(e.blendFuncSeparate(re[ue],re[Pe],re[pe],re[Ce]),b=ue,p=Pe,v=pe,R=Ce),(Xe.equals(f)===!1||bt!==_)&&(e.blendColor(Xe.r,Xe.g,Xe.b,bt),f.copy(Xe),_=bt),u=V,A=!1}function Ae(V,ae){V.side===2?De(e.CULL_FACE):de(e.CULL_FACE);let ue=V.side===1;ae&&(ue=!ue),Re(ue),V.blending===1&&V.transparent===!1?fe(0):fe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),n.setMask(V.colorWrite);let Pe=V.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),te(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):De(e.SAMPLE_ALPHA_TO_COVERAGE)}function Re(V){w!==V&&(V?e.frontFace(e.CW):e.frontFace(e.CCW),w=V)}function Z(V){V===0?De(e.CULL_FACE):(de(e.CULL_FACE),V!==L&&(V===1?e.cullFace(e.BACK):V===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),L=V}function H(V){V!==U&&(W&&e.lineWidth(V),U=V)}function te(V,ae,ue){V?(de(e.POLYGON_OFFSET_FILL),(N!==ae||F!==ue)&&(N=ae,F=ue,s.getReversed()&&(ae=-ae),e.polygonOffset(ae,ue))):De(e.POLYGON_OFFSET_FILL)}function J(V){V?de(e.SCISSOR_TEST):De(e.SCISSOR_TEST)}function I(V){V===void 0&&(V=e.TEXTURE0+j-1),$!==V&&(e.activeTexture(V),$=V)}function Se(V,ae,ue){ue===void 0&&(ue=$===null?e.TEXTURE0+j-1:$);let Pe=k[ue];Pe===void 0&&(Pe={type:void 0,texture:void 0},k[ue]=Pe),(Pe.type!==V||Pe.texture!==ae)&&($!==ue&&(e.activeTexture(ue),$=ue),e.bindTexture(V,ae||oe[V]),Pe.type=V,Pe.texture=ae)}function le(){let V=k[$];V!==void 0&&V.type!==void 0&&(e.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ye(){try{e.compressedTexImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function E(){try{e.texSubImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function D(){try{e.texSubImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function K(){try{e.compressedTexSubImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function se(){try{e.texStorage2D(...arguments)}catch(V){je("WebGLState:",V)}}function ve(){try{e.texStorage3D(...arguments)}catch(V){je("WebGLState:",V)}}function z(){try{e.texImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function ce(){try{e.texImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function me(V){return x[V]===void 0?e.getParameter(V):x[V]}function Ee(V,ae){x[V]!==ae&&(e.pixelStorei(V,ae),x[V]=ae)}function he(V){Ke.equals(V)===!1&&(e.scissor(V.x,V.y,V.z,V.w),Ke.copy(V))}function Ne(V){He.equals(V)===!1&&(e.viewport(V.x,V.y,V.z,V.w),He.copy(V))}function Fe(V,ae){let ue=c.get(ae);ue===void 0&&(ue=new WeakMap,c.set(ae,ue));let Pe=ue.get(V);Pe===void 0&&(Pe=e.getUniformBlockIndex(ae,V.name),ue.set(V,Pe))}function Ve(V,ae){let ue=c.get(ae).get(V);l.get(ae)!==ue&&(e.uniformBlockBinding(ae,ue,V.__bindingPointIndex),l.set(ae,ue))}function tt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),m={},x={},$=null,k={},g={},M=new WeakMap,S=[],d=null,h=!1,u=null,y=null,b=null,p=null,T=null,v=null,R=null,f=new et(0,0,0),_=0,A=!1,w=null,L=null,U=null,N=null,F=null,Ke.set(0,0,e.canvas.width,e.canvas.height),He.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:de,disable:De,bindFramebuffer:ze,drawBuffers:_e,useProgram:Ze,setBlending:fe,setMaterial:Ae,setFlipSided:Re,setCullFace:Z,setLineWidth:H,setPolygonOffset:te,setScissorTest:J,activeTexture:I,bindTexture:Se,unbindTexture:le,compressedTexImage2D:ye,compressedTexImage3D:P,texImage2D:z,texImage3D:ce,pixelStorei:Ee,getParameter:me,updateUBOMapping:Fe,uniformBlockBinding:Ve,texStorage2D:se,texStorage3D:ve,texSubImage2D:E,texSubImage3D:D,compressedTexSubImage2D:G,compressedTexSubImage3D:K,scissor:he,viewport:Ne,reset:tt}}function Pp(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,m=new WeakMap,x=new Set,g,M=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(P,E){return S?new OffscreenCanvas(P,E):$r("canvas")}function h(P,E,D){let G=1,K=ye(P);if((K.width>D||K.height>D)&&(G=D/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let se=Math.floor(G*K.width),ve=Math.floor(G*K.height);g===void 0&&(g=d(se,ve));let z=E?d(se,ve):g;return z.width=se,z.height=ve,z.getContext("2d").drawImage(P,0,0,se,ve),We("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+se+"x"+ve+")."),z}else return"data"in P&&We("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function u(P){return P.generateMipmaps}function y(P){e.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?e.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function p(P,E,D,G,K,se=!1){if(P!==null){if(e[P]!==void 0)return e[P];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ve;G&&(ve=t.get("EXT_texture_norm16"),ve||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=E;if(E===e.RED&&(D===e.FLOAT&&(z=e.R32F),D===e.HALF_FLOAT&&(z=e.R16F),D===e.UNSIGNED_BYTE&&(z=e.R8),D===e.UNSIGNED_SHORT&&ve&&(z=ve.R16_EXT),D===e.SHORT&&ve&&(z=ve.R16_SNORM_EXT)),E===e.RED_INTEGER&&(D===e.UNSIGNED_BYTE&&(z=e.R8UI),D===e.UNSIGNED_SHORT&&(z=e.R16UI),D===e.UNSIGNED_INT&&(z=e.R32UI),D===e.BYTE&&(z=e.R8I),D===e.SHORT&&(z=e.R16I),D===e.INT&&(z=e.R32I)),E===e.RG&&(D===e.FLOAT&&(z=e.RG32F),D===e.HALF_FLOAT&&(z=e.RG16F),D===e.UNSIGNED_BYTE&&(z=e.RG8),D===e.UNSIGNED_SHORT&&ve&&(z=ve.RG16_EXT),D===e.SHORT&&ve&&(z=ve.RG16_SNORM_EXT)),E===e.RG_INTEGER&&(D===e.UNSIGNED_BYTE&&(z=e.RG8UI),D===e.UNSIGNED_SHORT&&(z=e.RG16UI),D===e.UNSIGNED_INT&&(z=e.RG32UI),D===e.BYTE&&(z=e.RG8I),D===e.SHORT&&(z=e.RG16I),D===e.INT&&(z=e.RG32I)),E===e.RGB_INTEGER&&(D===e.UNSIGNED_BYTE&&(z=e.RGB8UI),D===e.UNSIGNED_SHORT&&(z=e.RGB16UI),D===e.UNSIGNED_INT&&(z=e.RGB32UI),D===e.BYTE&&(z=e.RGB8I),D===e.SHORT&&(z=e.RGB16I),D===e.INT&&(z=e.RGB32I)),E===e.RGBA_INTEGER&&(D===e.UNSIGNED_BYTE&&(z=e.RGBA8UI),D===e.UNSIGNED_SHORT&&(z=e.RGBA16UI),D===e.UNSIGNED_INT&&(z=e.RGBA32UI),D===e.BYTE&&(z=e.RGBA8I),D===e.SHORT&&(z=e.RGBA16I),D===e.INT&&(z=e.RGBA32I)),E===e.RGB&&(D===e.UNSIGNED_SHORT&&ve&&(z=ve.RGB16_EXT),D===e.SHORT&&ve&&(z=ve.RGB16_SNORM_EXT),D===e.UNSIGNED_INT_5_9_9_9_REV&&(z=e.RGB9_E5),D===e.UNSIGNED_INT_10F_11F_11F_REV&&(z=e.R11F_G11F_B10F)),E===e.RGBA){let ce=se?Jr:it.getTransfer(K);D===e.FLOAT&&(z=e.RGBA32F),D===e.HALF_FLOAT&&(z=e.RGBA16F),D===e.UNSIGNED_BYTE&&(z=ce==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),D===e.UNSIGNED_SHORT&&ve&&(z=ve.RGBA16_EXT),D===e.SHORT&&ve&&(z=ve.RGBA16_SNORM_EXT),D===e.UNSIGNED_SHORT_4_4_4_4&&(z=e.RGBA4),D===e.UNSIGNED_SHORT_5_5_5_1&&(z=e.RGB5_A1)}return(z===e.R16F||z===e.R32F||z===e.RG16F||z===e.RG32F||z===e.RGBA16F||z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function T(P,E){let D;return P?E===null||E===1014||E===1020?D=e.DEPTH24_STENCIL8:E===1015?D=e.DEPTH32F_STENCIL8:E===1012&&(D=e.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===1014||E===1020?D=e.DEPTH_COMPONENT24:E===1015?D=e.DEPTH_COMPONENT32F:E===1012&&(D=e.DEPTH_COMPONENT16),D}function v(P,E){return u(P)===!0||P.isFramebufferTexture&&P.minFilter!==1003&&P.minFilter!==1006?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){let E=P.target;E.removeEventListener("dispose",R),_(E),E.isVideoTexture&&m.delete(E),E.isHTMLTexture&&x.delete(E)}function f(P){let E=P.target;E.removeEventListener("dispose",f),w(E)}function _(P){let E=r.get(P);if(E.__webglInit===void 0)return;let D=P.source,G=M.get(D);if(G){let K=G[E.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(P),Object.keys(G).length===0&&M.delete(D)}r.remove(P)}function A(P){let E=r.get(P);e.deleteTexture(E.__webglTexture);let D=P.source,G=M.get(D);delete G[E.__cacheKey],s.memory.textures--}function w(P){let E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(E.__webglFramebuffer[G]))for(let K=0;K<E.__webglFramebuffer[G].length;K++)e.deleteFramebuffer(E.__webglFramebuffer[G][K]);else e.deleteFramebuffer(E.__webglFramebuffer[G]);E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer[G])}else{if(Array.isArray(E.__webglFramebuffer))for(let G=0;G<E.__webglFramebuffer.length;G++)e.deleteFramebuffer(E.__webglFramebuffer[G]);else e.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&e.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let G=0;G<E.__webglColorRenderbuffer.length;G++)E.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(E.__webglColorRenderbuffer[G]);E.__webglDepthRenderbuffer&&e.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let D=P.textures;for(let G=0,K=D.length;G<K;G++){let se=r.get(D[G]);se.__webglTexture&&(e.deleteTexture(se.__webglTexture),s.memory.textures--),r.remove(D[G])}r.remove(P)}let L=0;function U(){L=0}function N(){return L}function F(P){L=P}function j(){let P=L;return P>=a.maxTextures&&We("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+a.maxTextures),L+=1,P}function W(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ee(P,E){let D=r.get(P);if(P.isVideoTexture&&Se(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&D.__version!==P.version){let G=P.image;if(G===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{De(D,P,E);return}}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,D.__webglTexture,e.TEXTURE0+E)}function q(P,E){let D=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){De(D,P,E);return}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,D.__webglTexture,e.TEXTURE0+E)}function $(P,E){let D=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){De(D,P,E);return}i.bindTexture(e.TEXTURE_3D,D.__webglTexture,e.TEXTURE0+E)}function k(P,E){let D=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&D.__version!==P.version){ze(D,P,E);return}i.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+E)}let Te={[vr]:e.REPEAT,[hi]:e.CLAMP_TO_EDGE,[Ba]:e.MIRRORED_REPEAT},ge={[Nt]:e.NEAREST,[Rl]:e.NEAREST_MIPMAP_NEAREST,[Cl]:e.NEAREST_MIPMAP_LINEAR,[Ft]:e.LINEAR,[Pl]:e.LINEAR_MIPMAP_NEAREST,[za]:e.LINEAR_MIPMAP_LINEAR},Ke={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function He(P,E){if(E.type===1015&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===1006||E.magFilter===1007||E.magFilter===1005||E.magFilter===1008||E.minFilter===1006||E.minFilter===1007||E.minFilter===1005||E.minFilter===1008)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(P,e.TEXTURE_WRAP_S,Te[E.wrapS]),e.texParameteri(P,e.TEXTURE_WRAP_T,Te[E.wrapT]),(P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY)&&e.texParameteri(P,e.TEXTURE_WRAP_R,Te[E.wrapR]),e.texParameteri(P,e.TEXTURE_MAG_FILTER,ge[E.magFilter]),e.texParameteri(P,e.TEXTURE_MIN_FILTER,ge[E.minFilter]),E.compareFunction&&(e.texParameteri(P,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(P,e.TEXTURE_COMPARE_FUNC,Ke[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===1003||E.minFilter!==1005&&E.minFilter!==1008||E.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");e.texParameterf(P,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ie(P,E){let D=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",R));let G=E.source,K=M.get(G);K===void 0&&(K={},M.set(G,K));let se=W(E);if(se!==P.__cacheKey){K[se]===void 0&&(K[se]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,D=!0),K[se].usedTimes++;let ve=K[P.__cacheKey];ve!==void 0&&(K[P.__cacheKey].usedTimes--,ve.usedTimes===0&&A(E)),P.__cacheKey=se,P.__webglTexture=K[se].texture}return D}function oe(P,E,D){return Math.floor(Math.floor(P/D)/E)}function de(P,E,D,G){let K=P.updateRanges;if(K.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,E.width,E.height,D,G,E.data);else{K.sort((me,Ee)=>me.start-Ee.start);let se=0;for(let me=1;me<K.length;me++){let Ee=K[se],he=K[me],Ne=Ee.start+Ee.count,Fe=oe(he.start,E.width,4),Ve=oe(Ee.start,E.width,4);he.start<=Ne+1&&Fe===Ve&&oe(he.start+he.count-1,E.width,4)===Fe?Ee.count=Math.max(Ee.count,he.start+he.count-Ee.start):(++se,K[se]=he)}K.length=se+1;let ve=i.getParameter(e.UNPACK_ROW_LENGTH),z=i.getParameter(e.UNPACK_SKIP_PIXELS),ce=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,E.width);for(let me=0,Ee=K.length;me<Ee;me++){let he=K[me],Ne=Math.floor(he.start/4),Fe=Math.ceil(he.count/4),Ve=Ne%E.width,tt=Math.floor(Ne/E.width),V=Fe;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(e.UNPACK_SKIP_ROWS,tt),i.texSubImage2D(e.TEXTURE_2D,0,Ve,tt,V,1,D,G,E.data)}P.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ve),i.pixelStorei(e.UNPACK_SKIP_PIXELS,z),i.pixelStorei(e.UNPACK_SKIP_ROWS,ce)}}function De(P,E,D){let G=e.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),E.isData3DTexture&&(G=e.TEXTURE_3D);let K=ie(P,E),se=E.source;i.bindTexture(G,P.__webglTexture,e.TEXTURE0+D);let ve=r.get(se);if(se.version!==ve.__version||K===!0){if(i.activeTexture(e.TEXTURE0+D),!(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)){let ae=it.getPrimaries(it.workingColorSpace),ue=E.colorSpace===""?null:it.getPrimaries(E.colorSpace),Pe=E.colorSpace===""||ae===ue?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment);let z=h(E.image,!1,a.maxTextureSize);z=le(E,z);let ce=n.convert(E.format,E.colorSpace),me=n.convert(E.type),Ee=p(E.internalFormat,ce,me,E.normalized,E.colorSpace,E.isVideoTexture);He(G,E);let he,Ne=E.mipmaps,Fe=E.isVideoTexture!==!0,Ve=ve.__version===void 0||K===!0,tt=se.dataReady,V=v(E,z);if(E.isDepthTexture)Ee=T(E.format===ts,E.type),Ve&&(Fe?i.texStorage2D(e.TEXTURE_2D,1,Ee,z.width,z.height):i.texImage2D(e.TEXTURE_2D,0,Ee,z.width,z.height,0,ce,me,null));else if(E.isDataTexture)if(Ne.length>0){Fe&&Ve&&i.texStorage2D(e.TEXTURE_2D,V,Ee,Ne[0].width,Ne[0].height);for(let ae=0,ue=Ne.length;ae<ue;ae++)he=Ne[ae],Fe?tt&&i.texSubImage2D(e.TEXTURE_2D,ae,0,0,he.width,he.height,ce,me,he.data):i.texImage2D(e.TEXTURE_2D,ae,Ee,he.width,he.height,0,ce,me,he.data);E.generateMipmaps=!1}else Fe?(Ve&&i.texStorage2D(e.TEXTURE_2D,V,Ee,z.width,z.height),tt&&de(E,z,ce,me)):i.texImage2D(e.TEXTURE_2D,0,Ee,z.width,z.height,0,ce,me,z.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Fe&&Ve&&i.texStorage3D(e.TEXTURE_2D_ARRAY,V,Ee,Ne[0].width,Ne[0].height,z.depth);for(let ae=0,ue=Ne.length;ae<ue;ae++)if(he=Ne[ae],E.format!==1023)if(ce!==null)if(Fe){if(tt)if(E.layerUpdates.size>0){let Pe=uo(he.width,he.height,E.format,E.type);for(let Oe of E.layerUpdates){let pe=he.data.subarray(Oe*Pe/he.data.BYTES_PER_ELEMENT,(Oe+1)*Pe/he.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ae,0,0,Oe,he.width,he.height,1,ce,pe)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ae,0,0,0,he.width,he.height,z.depth,ce,he.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ae,Ee,he.width,he.height,z.depth,0,he.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?tt&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,ae,0,0,0,he.width,he.height,z.depth,ce,me,he.data):i.texImage3D(e.TEXTURE_2D_ARRAY,ae,Ee,he.width,he.height,z.depth,0,ce,me,he.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Fe&&Ve&&i.texStorage2D(e.TEXTURE_2D,V,Ee,Ne[0].width,Ne[0].height);for(let ae=0,ue=Ne.length;ae<ue;ae++)he=Ne[ae],E.format===1023?Fe?tt&&i.texSubImage2D(e.TEXTURE_2D,ae,0,0,he.width,he.height,ce,me,he.data):i.texImage2D(e.TEXTURE_2D,ae,Ee,he.width,he.height,0,ce,me,he.data):ce===null?We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?tt&&i.compressedTexSubImage2D(e.TEXTURE_2D,ae,0,0,he.width,he.height,ce,he.data):i.compressedTexImage2D(e.TEXTURE_2D,ae,Ee,he.width,he.height,0,he.data)}else if(E.isDataArrayTexture)if(Fe){if(Ve&&i.texStorage3D(e.TEXTURE_2D_ARRAY,V,Ee,z.width,z.height,z.depth),tt)if(E.layerUpdates.size>0){let ae=uo(z.width,z.height,E.format,E.type);for(let ue of E.layerUpdates){let Pe=z.data.subarray(ue*ae/z.data.BYTES_PER_ELEMENT,(ue+1)*ae/z.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ue,z.width,z.height,1,ce,me,Pe)}E.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,ce,me,z.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Ee,z.width,z.height,z.depth,0,ce,me,z.data);else if(E.isData3DTexture)Fe?(Ve&&i.texStorage3D(e.TEXTURE_3D,V,Ee,z.width,z.height,z.depth),tt&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,ce,me,z.data)):i.texImage3D(e.TEXTURE_3D,0,Ee,z.width,z.height,z.depth,0,ce,me,z.data);else if(E.isFramebufferTexture){if(Ve)if(Fe)i.texStorage2D(e.TEXTURE_2D,V,Ee,z.width,z.height);else{let ae=z.width,ue=z.height;for(let Pe=0;Pe<V;Pe++)i.texImage2D(e.TEXTURE_2D,Pe,Ee,ae,ue,0,ce,me,null),ae>>=1,ue>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in e){let ae=e.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),z.parentNode!==ae){ae.appendChild(z),x.add(E),ae.onpaint=ue=>{let Pe=ue.changedElements;for(let Oe of x)Pe.includes(Oe.image)&&(Oe.needsUpdate=!0)},ae.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,z);else{let ue=e.RGBA,Pe=e.RGBA,Oe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ue,Pe,Oe,z)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Fe&&Ve){let ae=ye(Ne[0]);i.texStorage2D(e.TEXTURE_2D,V,Ee,ae.width,ae.height)}for(let ae=0,ue=Ne.length;ae<ue;ae++)he=Ne[ae],Fe?tt&&i.texSubImage2D(e.TEXTURE_2D,ae,0,0,ce,me,he):i.texImage2D(e.TEXTURE_2D,ae,Ee,ce,me,he);E.generateMipmaps=!1}else if(Fe){if(Ve){let ae=ye(z);i.texStorage2D(e.TEXTURE_2D,V,Ee,ae.width,ae.height)}tt&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ce,me,z)}else i.texImage2D(e.TEXTURE_2D,0,Ee,ce,me,z);u(E)&&y(G),ve.__version=se.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ze(P,E,D){if(E.image.length!==6)return;let G=ie(P,E),K=E.source;i.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+D);let se=r.get(K);if(K.version!==se.__version||G===!0){i.activeTexture(e.TEXTURE0+D);let ve=it.getPrimaries(it.workingColorSpace),z=E.colorSpace===""?null:it.getPrimaries(E.colorSpace),ce=E.colorSpace===""||ve===z?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let me=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,he=[];for(let pe=0;pe<6;pe++)!me&&!Ee?he[pe]=h(E.image[pe],!0,a.maxCubemapSize):he[pe]=Ee?E.image[pe].image:E.image[pe],he[pe]=le(E,he[pe]);let Ne=he[0],Fe=n.convert(E.format,E.colorSpace),Ve=n.convert(E.type),tt=p(E.internalFormat,Fe,Ve,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,ae=se.__version===void 0||G===!0,ue=K.dataReady,Pe=v(E,Ne);He(e.TEXTURE_CUBE_MAP,E);let Oe;if(me){V&&ae&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Pe,tt,Ne.width,Ne.height);for(let pe=0;pe<6;pe++){Oe=he[pe].mipmaps;for(let Ce=0;Ce<Oe.length;Ce++){let Xe=Oe[Ce];E.format===1023?V?ue&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,Xe.width,Xe.height,Fe,Ve,Xe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,tt,Xe.width,Xe.height,0,Fe,Ve,Xe.data):Fe===null?We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ue&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,Xe.width,Xe.height,Fe,Xe.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,tt,Xe.width,Xe.height,0,Xe.data)}}}else{if(Oe=E.mipmaps,V&&ae){Oe.length>0&&Pe++;let pe=ye(he[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Pe,tt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){V?ue&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,he[pe].width,he[pe].height,Fe,Ve,he[pe].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,tt,he[pe].width,he[pe].height,0,Fe,Ve,he[pe].data);for(let Ce=0;Ce<Oe.length;Ce++){let Xe=Oe[Ce].image[pe].image;V?ue&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,Xe.width,Xe.height,Fe,Ve,Xe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,tt,Xe.width,Xe.height,0,Fe,Ve,Xe.data)}}else{V?ue&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe,Ve,he[pe]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,tt,Fe,Ve,he[pe]);for(let Ce=0;Ce<Oe.length;Ce++){let Xe=Oe[Ce];V?ue&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,Fe,Ve,Xe.image[pe]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,tt,Fe,Ve,Xe.image[pe])}}}u(E)&&y(e.TEXTURE_CUBE_MAP),se.__version=K.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function _e(P,E,D,G,K,se){let ve=n.convert(D.format,D.colorSpace),z=n.convert(D.type),ce=p(D.internalFormat,ve,z,D.normalized,D.colorSpace),me=r.get(E),Ee=r.get(D);if(Ee.__renderTarget=E,!me.__hasExternalTextures){let he=Math.max(1,E.width>>se),Ne=Math.max(1,E.height>>se);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?i.texImage3D(K,se,ce,he,Ne,E.depth,0,ve,z,null):i.texImage2D(K,se,ce,he,Ne,0,ve,z,null)}i.bindFramebuffer(e.FRAMEBUFFER,P),I(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,K,Ee.__webglTexture,0,J(E)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,K,Ee.__webglTexture,se),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ze(P,E,D){if(e.bindRenderbuffer(e.RENDERBUFFER,P),E.depthBuffer){let G=E.depthTexture,K=G&&G.isDepthTexture?G.type:null,se=T(E.stencilBuffer,K),ve=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,J(E),se,E.width,E.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,J(E),se,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,se,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ve,e.RENDERBUFFER,P)}else{let G=E.textures;for(let K=0;K<G.length;K++){let se=G[K],ve=n.convert(se.format,se.colorSpace),z=n.convert(se.type),ce=p(se.internalFormat,ve,z,se.normalized,se.colorSpace);I(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,J(E),ce,E.width,E.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,J(E),ce,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,ce,E.width,E.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ne(P,E,D){let G=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=r.get(E.depthTexture);if(K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G){if(K.__webglInit===void 0&&(K.__webglInit=!0,E.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),He(e.TEXTURE_CUBE_MAP,E.depthTexture);let me=n.convert(E.depthTexture.format),Ee=n.convert(E.depthTexture.type),he;E.depthTexture.format===1026?he=e.DEPTH_COMPONENT24:E.depthTexture.format===1027&&(he=e.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,he,E.width,E.height,0,me,Ee,null)}}else ee(E.depthTexture,0);let se=K.__webglTexture,ve=J(E),z=G?e.TEXTURE_CUBE_MAP_POSITIVE_X+D:e.TEXTURE_2D,ce=E.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(E.depthTexture.format===1026)I(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ce,z,se,0,ve):e.framebufferTexture2D(e.FRAMEBUFFER,ce,z,se,0);else if(E.depthTexture.format===1027)I(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ce,z,se,0,ve):e.framebufferTexture2D(e.FRAMEBUFFER,ce,z,se,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(P){let E=r.get(P),D=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let G=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),G){let K=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),E.__depthDisposeCallback=K}E.__boundDepthTexture=G}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(D)for(let G=0;G<6;G++)ne(E.__webglFramebuffer[G],P,G);else{let G=P.texture.mipmaps;G&&G.length>0?ne(E.__webglFramebuffer[0],P,0):ne(E.__webglFramebuffer,P,0)}else if(D){E.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[G]),E.__webglDepthbuffer[G]===void 0)E.__webglDepthbuffer[G]=e.createRenderbuffer(),Ze(E.__webglDepthbuffer[G],P,!1);else{let K=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,se),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,se)}}else{let G=P.texture.mipmaps;if(G&&G.length>0?i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=e.createRenderbuffer(),Ze(E.__webglDepthbuffer,P,!1);else{let K=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,se),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,se)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function fe(P,E,D){let G=r.get(P);E!==void 0&&_e(G.__webglFramebuffer,P,P.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),D!==void 0&&re(P)}function Ae(P){let E=P.texture,D=r.get(P),G=r.get(E);P.addEventListener("dispose",f);let K=P.textures,se=P.isWebGLCubeRenderTarget===!0,ve=K.length>1;if(ve||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=E.version,s.memory.textures++),se){D.__webglFramebuffer=[];for(let z=0;z<6;z++)if(E.mipmaps&&E.mipmaps.length>0){D.__webglFramebuffer[z]=[];for(let ce=0;ce<E.mipmaps.length;ce++)D.__webglFramebuffer[z][ce]=e.createFramebuffer()}else D.__webglFramebuffer[z]=e.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){D.__webglFramebuffer=[];for(let z=0;z<E.mipmaps.length;z++)D.__webglFramebuffer[z]=e.createFramebuffer()}else D.__webglFramebuffer=e.createFramebuffer();if(ve)for(let z=0,ce=K.length;z<ce;z++){let me=r.get(K[z]);me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture(),s.memory.textures++)}if(P.samples>0&&I(P)===!1){D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let z=0;z<K.length;z++){let ce=K[z];D.__webglColorRenderbuffer[z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer[z]);let me=n.convert(ce.format,ce.colorSpace),Ee=n.convert(ce.type),he=p(ce.internalFormat,me,Ee,ce.normalized,ce.colorSpace,P.isXRRenderTarget===!0),Ne=J(P);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne,he,P.width,P.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+z,e.RENDERBUFFER,D.__webglColorRenderbuffer[z])}e.bindRenderbuffer(e.RENDERBUFFER,null),P.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),Ze(D.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(se){i.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),He(e.TEXTURE_CUBE_MAP,E);for(let z=0;z<6;z++)if(E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)_e(D.__webglFramebuffer[z][ce],P,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+z,ce);else _e(D.__webglFramebuffer[z],P,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);u(E)&&y(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ve){for(let z=0,ce=K.length;z<ce;z++){let me=K[z],Ee=r.get(me),he=e.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(he,Ee.__webglTexture),He(he,me),_e(D.__webglFramebuffer,P,me,e.COLOR_ATTACHMENT0+z,he,0),u(me)&&y(he)}i.unbindTexture()}else{let z=e.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(z=P.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(z,G.__webglTexture),He(z,E),E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)_e(D.__webglFramebuffer[ce],P,E,e.COLOR_ATTACHMENT0,z,ce);else _e(D.__webglFramebuffer,P,E,e.COLOR_ATTACHMENT0,z,0);u(E)&&y(z),i.unbindTexture()}P.depthBuffer&&re(P)}function Re(P){let E=P.textures;for(let D=0,G=E.length;D<G;D++){let K=E[D];if(u(K)){let se=b(P),ve=r.get(K).__webglTexture;i.bindTexture(se,ve),y(se),i.unbindTexture()}}}let Z=[],H=[];function te(P){if(P.samples>0){if(I(P)===!1){let E=P.textures,D=P.width,G=P.height,K=e.COLOR_BUFFER_BIT,se=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ve=r.get(P),z=E.length>1;if(z)for(let me=0;me<E.length;me++)i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let ce=P.texture.mipmaps;ce&&ce.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let me=0;me<E.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ve.__webglColorRenderbuffer[me]);let Ee=r.get(E[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ee,0)}e.blitFramebuffer(0,0,D,G,0,0,D,G,K,e.NEAREST),l===!0&&(Z.length=0,H.length=0,Z.push(e.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Z.push(se),H.push(se),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,H)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Z))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),z)for(let me=0;me<E.length;me++){i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,ve.__webglColorRenderbuffer[me]);let Ee=r.get(E[me]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,Ee,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let E=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[E])}}}function J(P){return Math.min(a.maxSamples,P.samples)}function I(P){let E=r.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Se(P){let E=s.render.frame;m.get(P)!==E&&(m.set(P,E),P.update())}function le(P,E){let D=P.colorSpace,G=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||D!=="srgb-linear"&&D!==""&&(it.getTransfer(D)==="srgb"?(G!==1023||K!==1009)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",D)),E}function ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=U,this.getTextureUnits=N,this.setTextureUnits=F,this.setTexture2D=ee,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=k,this.rebindTextures=fe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=I,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Lp(e,t){function i(r,a=""){let n,s=it.getTransfer(a);if(r===1009)return e.UNSIGNED_BYTE;if(r===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(r===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===1010)return e.BYTE;if(r===1011)return e.SHORT;if(r===1012)return e.UNSIGNED_SHORT;if(r===1013)return e.INT;if(r===1014)return e.UNSIGNED_INT;if(r===1015)return e.FLOAT;if(r===1016)return e.HALF_FLOAT;if(r===1021)return e.ALPHA;if(r===1022)return e.RGB;if(r===1023)return e.RGBA;if(r===1026)return e.DEPTH_COMPONENT;if(r===1027)return e.DEPTH_STENCIL;if(r===1028)return e.RED;if(r===1029)return e.RED_INTEGER;if(r===1030)return e.RG;if(r===1031)return e.RG_INTEGER;if(r===1033)return e.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779)if(s==="srgb")if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===33776)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===33776)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===35840)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196||r===37492||r===37496||r===37488||r===37489||r===37490||r===37491)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===36196||r===37492)return s==="srgb"?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===37496)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===37488)return n.COMPRESSED_R11_EAC;if(r===37489)return n.COMPRESSED_SIGNED_R11_EAC;if(r===37490)return n.COMPRESSED_RG11_EAC;if(r===37491)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===37808)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===36492||r===36494||r===36495)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===36492)return s==="srgb"?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===36494)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===36495)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===36283||r===36284||r===36285||r===36286)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===36283)return n.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===1020?e.UNSIGNED_INT_24_8:e[r]===void 0?null:e[r]}return{convert:i}}var Np=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ip=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Up=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ds(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new jt({vertexShader:Np,fragmentShader:Ip,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Kt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dp=class extends Pi{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,c=null,m=null,x=null,g=null,M=null,S=typeof XRWebGLBinding<"u",d=new Up,h={},u=t.getContextAttributes(),y=null,b=null,p=[],T=[],v=new Me,R=null,f=null,_=new qt;_.viewport=new St;let A=new qt;A.viewport=new St;let w=[_,A],L=new fu,U=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let oe=p[ie];return oe===void 0&&(oe=new Ka,p[ie]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ie){let oe=p[ie];return oe===void 0&&(oe=new Ka,p[ie]=oe),oe.getGripSpace()},this.getHand=function(ie){let oe=p[ie];return oe===void 0&&(oe=new Ka,p[ie]=oe),oe.getHandSpace()};function F(ie){let oe=T.indexOf(ie.inputSource);if(oe===-1)return;let de=p[oe];de!==void 0&&(de.update(ie.inputSource,ie.frame,l||n),de.dispatchEvent({type:ie.type,data:ie.inputSource}))}function j(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",W);for(let ie=0;ie<p.length;ie++){let oe=T[ie];oe!==null&&(T[ie]=null,p[ie].disconnect(oe))}U=null,N=null,d.reset();for(let ie in h)delete h[ie];if(e.setRenderTarget(y),g=null,x=null,m=null,r=null,b=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(v.width,v.height,!1),f!==null){let ie=f.camera;ie.fov=f.fov,ie.zoom=f.zoom,ie.updateProjectionMatrix(),f=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){a=ie,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){s=ie,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return x===null?g:x},this.getBinding=function(){return m===null&&S&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",j),r.addEventListener("inputsourceschange",W),u.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(v),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,de=null,De=null;u.depth&&(De=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=u.stencil?ts:xr,de=u.stencil?es:Ci);let ze={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:a};m=this.getBinding(),x=m.createProjectionLayer(ze),r.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),b=new Gt(x.textureWidth,x.textureHeight,{format:_r,type:_i,depthTexture:new Lr(x.textureWidth,x.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{let oe={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new Gt(g.framebufferWidth,g.framebufferHeight,{format:_r,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function W(ie){for(let oe=0;oe<ie.removed.length;oe++){let de=ie.removed[oe],De=T.indexOf(de);De>=0&&(T[De]=null,p[De].disconnect(de))}for(let oe=0;oe<ie.added.length;oe++){let de=ie.added[oe],De=T.indexOf(de);if(De===-1){for(let _e=0;_e<p.length;_e++)if(_e>=T.length){T.push(de),De=_e;break}else if(T[_e]===null){T[_e]=de,De=_e;break}if(De===-1)break}let ze=p[De];ze&&ze.connect(de)}}let ee=new O,q=new O;function $(ie,oe,de){ee.setFromMatrixPosition(oe.matrixWorld),q.setFromMatrixPosition(de.matrixWorld);let De=ee.distanceTo(q),ze=oe.projectionMatrix.elements,_e=de.projectionMatrix.elements,Ze=ze[14]/(ze[10]-1),ne=ze[14]/(ze[10]+1),re=(ze[9]+1)/ze[5],fe=(ze[9]-1)/ze[5],Ae=(ze[8]-1)/ze[0],Re=(_e[8]+1)/_e[0],Z=Ze*Ae,H=Ze*Re,te=De/(-Ae+Re),J=te*-Ae;if(oe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(J),ie.translateZ(te),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ze[10]===-1)ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let I=Ze+te,Se=ne+te,le=Z-J,ye=H+(De-J),P=re*ne/Se*I,E=fe*ne/Se*I;ie.projectionMatrix.makePerspective(le,ye,P,E,I,Se),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function k(ie,oe){oe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(oe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let oe=ie.near,de=ie.far;d.texture!==null&&(d.depthNear>0&&(oe=d.depthNear),d.depthFar>0&&(de=d.depthFar)),L.near=A.near=_.near=oe,L.far=A.far=_.far=de,(U!==L.near||N!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,N=L.far),L.layers.mask=ie.layers.mask|6,_.layers.mask=L.layers.mask&-5,A.layers.mask=L.layers.mask&-3;let De=ie.parent,ze=L.cameras;k(L,De);for(let _e=0;_e<ze.length;_e++)k(ze[_e],De);ze.length===2?$(L,_,A):L.projectionMatrix.copy(_.projectionMatrix),f===null&&ie.isPerspectiveCamera&&(f={camera:ie,fov:ie.fov,zoom:ie.zoom}),Te(ie,L,De)};function Te(ie,oe,de){de===null?ie.matrix.copy(oe.matrixWorld):(ie.matrix.copy(de.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(oe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Mr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(x===null&&g===null))return o},this.setFoveation=function(ie){o=ie,x!==null&&(x.fixedFoveation=ie),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ie)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(L)},this.getCameraTexture=function(ie){return h[ie]};let ge=null;function Ke(ie,oe){if(c=oe.getViewerPose(l||n),M=oe,c!==null){let de=c.views;g!==null&&(e.setRenderTargetFramebuffer(b,g.framebuffer),e.setRenderTarget(b));let De=!1;de.length!==L.cameras.length&&(L.cameras.length=0,De=!0);for(let _e=0;_e<de.length;_e++){let Ze=de[_e],ne=null;if(g!==null)ne=g.getViewport(Ze);else{let fe=m.getViewSubImage(x,Ze);ne=fe.viewport,_e===0&&(e.setRenderTargetTextures(b,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(b))}let re=w[_e];re===void 0&&(re=new qt,re.layers.enable(_e),re.viewport=new St,w[_e]=re),re.matrix.fromArray(Ze.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ze.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ne.x,ne.y,ne.width,ne.height),_e===0&&(L.matrix.copy(re.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),De===!0&&L.cameras.push(re)}let ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){m=i.getBinding();let _e=m.getDepthInformation(de[0]);_e&&_e.isValid&&_e.texture&&d.init(_e,r.renderState)}if(ze&&ze.includes("camera-access")&&S){e.state.unbindTexture(),m=i.getBinding();for(let _e=0;_e<de.length;_e++){let Ze=de[_e].camera;if(Ze){let ne=h[Ze];ne||(ne=new Ds,h[Ze]=ne);let re=m.getCameraImage(Ze);ne.sourceTexture=re}}}}for(let de=0;de<p.length;de++){let De=T[de],ze=p[de];De!==null&&ze!==void 0&&ze.update(De,oe,l||n)}ge&&ge(ie,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),M=null}let He=new po;He.setAnimationLoop(Ke),this.setAnimationLoop=function(ie){ge=ie},this.dispose=function(){}}},Op=new mt,Ho=new qe;Ho.set(-1,0,0,0,1,0,0,0,1);function Fp(e,t){function i(h,u){h.matrixAutoUpdate===!0&&h.updateMatrix(),u.value.copy(h.matrix)}function r(h,u){u.color.getRGB(h.fogColor.value,Qs(e)),u.isFog?(h.fogNear.value=u.near,h.fogFar.value=u.far):u.isFogExp2&&(h.fogDensity.value=u.density)}function a(h,u,y,b,p){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?n(h,u):u.isMeshLambertMaterial?(n(h,u),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(n(h,u),x(h,u)):u.isMeshPhongMaterial?(n(h,u),m(h,u),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(n(h,u),g(h,u),u.isMeshPhysicalMaterial&&M(h,u,p)):u.isMeshMatcapMaterial?(n(h,u),S(h,u)):u.isMeshDepthMaterial?n(h,u):u.isMeshDistanceMaterial?(n(h,u),d(h,u)):u.isMeshNormalMaterial?n(h,u):u.isLineBasicMaterial?(s(h,u),u.isLineDashedMaterial&&o(h,u)):u.isPointsMaterial?l(h,u,y,b):u.isSpriteMaterial?c(h,u):u.isShadowMaterial?(h.color.value.copy(u.color),h.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function n(h,u){h.opacity.value=u.opacity,u.color&&h.diffuse.value.copy(u.color),u.emissive&&h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(h.map.value=u.map,i(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,i(u.alphaMap,h.alphaMapTransform)),u.bumpMap&&(h.bumpMap.value=u.bumpMap,i(u.bumpMap,h.bumpMapTransform),h.bumpScale.value=u.bumpScale,u.side===1&&(h.bumpScale.value*=-1)),u.normalMap&&(h.normalMap.value=u.normalMap,i(u.normalMap,h.normalMapTransform),h.normalScale.value.copy(u.normalScale),u.side===1&&h.normalScale.value.negate()),u.displacementMap&&(h.displacementMap.value=u.displacementMap,i(u.displacementMap,h.displacementMapTransform),h.displacementScale.value=u.displacementScale,h.displacementBias.value=u.displacementBias),u.emissiveMap&&(h.emissiveMap.value=u.emissiveMap,i(u.emissiveMap,h.emissiveMapTransform)),u.specularMap&&(h.specularMap.value=u.specularMap,i(u.specularMap,h.specularMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest);let y=t.get(u),b=y.envMap,p=y.envMapRotation;b&&(h.envMap.value=b,h.envMapRotation.value.setFromMatrix4(Op.makeRotationFromEuler(p)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&h.envMapRotation.value.premultiply(Ho),h.reflectivity.value=u.reflectivity,h.ior.value=u.ior,h.refractionRatio.value=u.refractionRatio),u.lightMap&&(h.lightMap.value=u.lightMap,h.lightMapIntensity.value=u.lightMapIntensity,i(u.lightMap,h.lightMapTransform)),u.aoMap&&(h.aoMap.value=u.aoMap,h.aoMapIntensity.value=u.aoMapIntensity,i(u.aoMap,h.aoMapTransform))}function s(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,i(u.map,h.mapTransform))}function o(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale}function l(h,u,y,b){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*y,h.scale.value=b*.5,u.map&&(h.map.value=u.map,i(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,i(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function c(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,i(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,i(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function m(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)}function x(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)}function g(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,i(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,i(u.roughnessMap,h.roughnessMapTransform)),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)}function M(h,u,y){h.ior.value=u.ior,u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,i(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,i(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,i(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,i(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,i(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===1&&h.clearcoatNormalScale.value.negate())),u.dispersion>0&&(h.dispersion.value=u.dispersion),u.retroreflectivity>0&&(h.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,i(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,i(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=y.texture,h.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,i(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,i(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,i(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,i(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,i(u.specularIntensityMap,h.specularIntensityMapTransform))}function S(h,u){u.matcap&&(h.matcap.value=u.matcap)}function d(h,u){let y=t.get(u).light;h.referencePosition.value.setFromMatrixPosition(y.matrixWorld),h.nearDistance.value=y.shadow.camera.near,h.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Bp(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,T){let v=T.program;r.uniformBlockBinding(p,v)}function c(p,T){let v=a[p.id];v===void 0&&(h(p),v=m(p),a[p.id]=v,p.addEventListener("dispose",y));let R=T.program;r.updateUBOMapping(p,R);let f=t.render.frame;n[p.id]!==f&&(g(p),n[p.id]=f)}function m(p){let T=x();p.__bindingPointIndex=T;let v=e.createBuffer(),R=p.__size,f=p.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,R,f),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,v),v}function x(){for(let p=0;p<o;p++)if(s.indexOf(p)===-1)return s.push(p),p;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(p){let T=a[p.id],v=p.uniforms,R=p.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let f=0,_=v.length;f<_;f++){let A=v[f];if(Array.isArray(A))for(let w=0,L=A.length;w<L;w++)M(A[w],f,w,R);else M(A,f,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function M(p,T,v,R){if(d(p,T,v,R)===!0){let f=p.__offset,_=p.value;if(Array.isArray(_)){let A=0;for(let w=0;w<_.length;w++){let L=_[w],U=u(L);S(L,p.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(_,p.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,f,p.__data)}}function S(p,T,v){typeof p=="number"||typeof p=="boolean"?T[0]=p:p.isMatrix3?(T[0]=p.elements[0],T[1]=p.elements[1],T[2]=p.elements[2],T[3]=0,T[4]=p.elements[3],T[5]=p.elements[4],T[6]=p.elements[5],T[7]=0,T[8]=p.elements[6],T[9]=p.elements[7],T[10]=p.elements[8],T[11]=0):ArrayBuffer.isView(p)?T.set(new p.constructor(p.buffer,p.byteOffset,T.length)):p.toArray(T,v)}function d(p,T,v,R){let f=p.value,_=T+"_"+v;if(R[_]===void 0)return typeof f=="number"||typeof f=="boolean"?R[_]=f:ArrayBuffer.isView(f)?R[_]=f.slice():R[_]=f.clone(),!0;{let A=R[_];if(typeof f=="number"||typeof f=="boolean"){if(A!==f)return R[_]=f,!0}else{if(ArrayBuffer.isView(f))return!0;if(A.equals(f)===!1)return A.copy(f),!0}}return!1}function h(p){let T=p.uniforms,v=0;for(let f=0,_=T.length;f<_;f++){let A=Array.isArray(T[f])?T[f]:[T[f]];for(let w=0,L=A.length;w<L;w++){let U=A[w],N=Array.isArray(U.value)?U.value:[U.value];for(let F=0,j=N.length;F<j;F++){let W=N[F],ee=u(W),q=v%16,$=q%ee.boundary,k=q+$;v+=$,k!==0&&16-k<ee.storage&&(v+=16-k),U.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=ee.storage}}}let R=v%16;return R>0&&(v+=16-R),p.__size=v,p.__cache={},this}function u(p){let T={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(T.boundary=4,T.storage=4):p.isVector2?(T.boundary=8,T.storage=8):p.isVector3||p.isColor?(T.boundary=16,T.storage=12):p.isVector4?(T.boundary=16,T.storage=16):p.isMatrix3?(T.boundary=48,T.storage=48):p.isMatrix4?(T.boundary=64,T.storage=64):p.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(T.boundary=16,T.storage=p.byteLength):We("WebGLRenderer: Unsupported uniform value type.",p),T}function y(p){let T=p.target;T.removeEventListener("dispose",y);let v=s.indexOf(T.__bindingPointIndex);s.splice(v,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function b(){for(let p in a)e.deleteBuffer(a[p]);s=[],a={},n={}}return{bind:l,update:c,dispose:b}}var zp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function Vp(){return oi===null&&(oi=new dc(zp,16,16,Yr,xi),oi.name="DFG_LUT",oi.minFilter=Ft,oi.magFilter=Ft,oi.wrapS=hi,oi.wrapT=hi,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var kp=class{constructor(e={}){let{canvas:t=Eh(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1,outputBufferType:g=_i}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=n;let S=g,d=new Set([as,rs,is]),h=new Set([_i,Ci,Kn,es,$n,Qn]),u=new Uint32Array(4),y=new Int32Array(4),b=new O,p=null,T=null,v=[],R=[],f=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,A=!1,w=null,L=null,U=null,N=null;this._outputColorSpace=ft;let F=0,j=0,W=null,ee=-1,q=null,$=new St,k=new St,Te=null,ge=new et(0),Ke=0,He=t.width,ie=t.height,oe=1,de=null,De=null,ze=new St(0,0,He,ie),_e=new St(0,0,He,ie),Ze=!1,ne=new fn,re=!1,fe=!1,Ae=new mt,Re=new O,Z=new St,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function J(){return W===null?oe:1}let I=i;function Se(C,B){return t.getContext(C,B)}let le,ye,P,E,D,G,K,se,ve,z,ce,me,Ee,he,Ne,Fe,Ve,tt,V,ae,ue,Pe,Oe;try{let C={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",ot,!1),I===null){let B="webgl2";if(I=Se(B,C),I===null)throw Se(B)?Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):Error("THREE.WebGLRenderer: Error creating WebGL context.")}pe()}catch(C){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),je("WebGLRenderer: "+C.message),C}function pe(){le=new Vu(I),le.init(),ue=new Lp(I,le),ye=new Pu(I,le,e,ue),P=new Cp(I,le),ye.reversedDepthBuffer&&x&&P.buffers.depth.setReversed(!0),L=I.createFramebuffer(),U=I.createFramebuffer(),N=I.createFramebuffer(),E=new Gu(I),D=new mp,G=new Pp(I,le,P,D,ye,ue,E),K=new zu(_),se=new Eu(I),Pe=new Ru(I,se),ve=new ku(I,se,E,Pe),z=new Xu(I,ve,se,Pe,E),tt=new Wu(I,ye,G),Ne=new Lu(D),ce=new fp(_,K,le,ye,Pe,Ne),me=new Fp(_,D),Ee=new vp,he=new bp(le),Ve=new Au(_,K,P,z,M,o),Fe=new Rp(_,z,ye),Oe=new Bp(I,E,ye,P),V=new Cu(I,le,E),ae=new Hu(I,le,E),E.programs=ce.programs,_.capabilities=ye,_.extensions=le,_.properties=D,_.renderLists=Ee,_.shadowMap=Fe,_.state=P,_.info=E}S!==1009&&(f=new qu(S,t.width,t.height,s,r,a));let Ce=new Dp(_,I);this.xr=Ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let C=le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(C){C!==void 0&&(oe=C,this.setSize(He,ie,!1))},this.getSize=function(C){return C.set(He,ie)},this.setSize=function(C,B,Q=!0){if(Ce.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}He=C,ie=B,t.width=Math.floor(C*oe),t.height=Math.floor(B*oe),Q===!0&&(t.style.width=C+"px",t.style.height=B+"px"),f!==null&&f.setSize(t.width,t.height),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(He*oe,ie*oe).floor()},this.setDrawingBufferSize=function(C,B,Q){He=C,ie=B,oe=Q,t.width=Math.floor(C*Q),t.height=Math.floor(B*Q),this.setViewport(0,0,C,B)},this.setEffects=function(C){if(S===1009){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let B=0;B<C.length;B++)if(C[B].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}f.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy($)},this.getViewport=function(C){return C.copy(ze)},this.setViewport=function(C,B,Q,Y){C.isVector4?ze.set(C.x,C.y,C.z,C.w):ze.set(C,B,Q,Y),P.viewport($.copy(ze).multiplyScalar(oe).round())},this.getScissor=function(C){return C.copy(_e)},this.setScissor=function(C,B,Q,Y){C.isVector4?_e.set(C.x,C.y,C.z,C.w):_e.set(C,B,Q,Y),P.scissor(k.copy(_e).multiplyScalar(oe).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(C){P.setScissorTest(Ze=C)},this.setOpaqueSort=function(C){de=C},this.setTransparentSort=function(C){De=C},this.getClearColor=function(C){return C.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(C=!0,B=!0,Q=!0){let Y=0;if(C){let X=!1;if(W!==null){let xe=W.texture.format;X=d.has(xe)}if(X){let xe=W.texture.type,we=h.has(xe),Le=Ve.getClearColor(),Ie=Ve.getClearAlpha(),Ge=Le.r,Qe=Le.g,rt=Le.b;we?(u[0]=Ge,u[1]=Qe,u[2]=rt,u[3]=Ie,I.clearBufferuiv(I.COLOR,0,u)):(y[0]=Ge,y[1]=Qe,y[2]=rt,y[3]=Ie,I.clearBufferiv(I.COLOR,0,y))}else Y|=I.COLOR_BUFFER_BIT}B&&(Y|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),w=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),Ve.dispose(),Ee.dispose(),he.dispose(),D.dispose(),K.dispose(),z.dispose(),Pe.dispose(),Oe.dispose(),ce.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Hn),Ce.removeEventListener("sessionend",Gn),Ai.stop()};function Xe(C){C.preventDefault(),us("WebGLRenderer: Context Lost."),A=!0}function bt(){us("WebGLRenderer: Context Restored."),A=!1;let C=E.autoReset,B=Fe.enabled,Q=Fe.autoUpdate,Y=Fe.needsUpdate,X=Fe.type;pe(),E.autoReset=C,Fe.enabled=B,Fe.autoUpdate=Q,Fe.needsUpdate=Y,Fe.type=X}function ot(C){je("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Qt(C){let B=C.target;B.removeEventListener("dispose",Qt),li(B)}function li(C){_l(C),D.remove(C)}function _l(C){let B=D.get(C).programs;B!==void 0&&(B.forEach(function(Q){ce.releaseProgram(Q)}),C.isShaderMaterial&&ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,Q,Y,X,xe){B===null&&(B=H);let we=X.isMesh&&X.matrixWorld.determinantAffine()<0,Le=Ml(C,B,Q,Y,X);P.setMaterial(Y,we);let Ie=Q.index,Ge=1;if(Y.wireframe===!0){if(Ie=ve.getWireframeAttribute(Q),Ie===void 0)return;Ge=2}let Qe=Q.drawRange,rt=Q.attributes.position,Be=Qe.start*Ge,ht=(Qe.start+Qe.count)*Ge;xe!==null&&(Be=Math.max(Be,xe.start*Ge),ht=Math.min(ht,(xe.start+xe.count)*Ge)),Ie===null?rt!=null&&(Be=Math.max(Be,0),ht=Math.min(ht,rt.count)):(Be=Math.max(Be,0),ht=Math.min(ht,Ie.count));let _t=ht-Be;if(_t<0||_t===1/0)return;Pe.setup(X,Y,Le,Q,Ie);let dt,nt=V;if(Ie!==null&&(dt=se.get(Ie),nt=ae,nt.setIndex(dt)),X.isMesh)Y.wireframe===!0?(P.setLineWidth(Y.wireframeLinewidth*J()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(X.isLine){let At=Y.linewidth;At===void 0&&(At=1),P.setLineWidth(At*J()),X.isLineSegments?nt.setMode(I.LINES):X.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else X.isPoints?nt.setMode(I.POINTS):X.isSprite&&nt.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(le.get("WEBGL_multi_draw"))nt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let At=X._multiDrawStarts,Ue=X._multiDrawCounts,Dt=X._multiDrawCount,Ot=Ie?se.get(Ie).bytesPerElement:1,kt=D.get(Y).currentProgram.getUniforms();for(let ei=0;ei<Dt;ei++)kt.setValue(I,"_gl_DrawID",ei),nt.render(At[ei]/Ot,Ue[ei])}else if(X.isInstancedMesh)nt.renderInstances(Be,_t,X.count);else if(Q.isInstancedBufferGeometry){let At=Q._maxInstanceCount===void 0?1/0:Q._maxInstanceCount,Ue=Math.min(Q.instanceCount,At);nt.renderInstances(Be,_t,Ue)}else nt.render(Be,_t)};function kn(C,B,Q,Y){w!==null&&C.isNodeMaterial&&w.setObject(Y,C),re===!0&&Ne.setState(C,Q,!1),C.transparent===!0&&C.side===2&&C.forceSinglePass===!1?(C.side=1,C.needsUpdate=!0,jr(C,B,Y),C.side=0,C.needsUpdate=!0,jr(C,B,Y),C.side=2):jr(C,B,Y)}this.compile=function(C,B,Q=null){Q===null&&(Q=C),w!==null&&w.renderStart(C,B,Q),T=he.get(Q),T.init(B),R.push(T),Q.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),C!==Q&&C.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),w!==null&&w.updateLights(T.state.lightsArray),fe=this.localClippingEnabled,re=Ne.init(this.clippingPlanes,fe),re===!0&&Ne.setGlobalState(this.clippingPlanes,B),w!==null&&Fe.render(T.state.shadowsArray,Q,B);let Y=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let xe=X.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){let Le=xe[we];kn(Le,Q,B,X),Y.add(Le)}else kn(xe,Q,B,X),Y.add(xe)}),T=R.pop(),w!==null&&w.renderEnd(),Y},this.compileAsync=function(C,B,Q=null){let Y=this.compile(C,B,Q);return new Promise(X=>{function xe(){if(Y.forEach(function(we){let Le=D.get(we).currentProgram;(Le===void 0||Le.isReady())&&Y.delete(we)}),Y.size===0){X(C);return}setTimeout(xe,10)}le.get("KHR_parallel_shader_compile")===null?setTimeout(xe,10):xe()})};let Oa=null;function xl(C){Oa&&Oa(C)}function Hn(){Ai.stop()}function Gn(){Ai.start()}let Ai=new po;Ai.setAnimationLoop(xl),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(C){Oa=C,Ce.setAnimationLoop(C),C===null?Ai.stop():Ai.start()},Ce.addEventListener("sessionstart",Hn),Ce.addEventListener("sessionend",Gn),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w!==null&&w.renderStart(C,B);let Q=Ce.enabled===!0&&Ce.isPresenting===!0,Y=f!==null&&(W===null||Q)&&f.begin(_,W);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(f===null||f.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(B),B=Ce.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,B,W),T=he.get(C,R.length),T.init(B),T.state.textureUnits=G.getTextureUnits(),R.push(T),Ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ne.setFromProjectionMatrix(Ae,Gi,B.reversedDepth),fe=this.localClippingEnabled,re=Ne.init(this.clippingPlanes,fe),p=Ee.get(C,v.length),p.init(),v.push(p),Ce.enabled===!0&&Ce.isPresenting===!0){let xe=_.xr.getDepthSensingMesh();xe!==null&&Fa(xe,B,-1/0,_.sortObjects)}Fa(C,B,0,_.sortObjects),p.finish(),w!==null&&w.updateLights(T.state.lightsArray),_.sortObjects===!0&&p.sort(de,De),te=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,te&&Ve.addToRenderList(p,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Ne.beginShadows();let X=T.state.shadowsArray;if(Fe.render(X,C,B),re===!0&&Ne.endShadows(),(Y&&f.hasRenderPass())===!1){let xe=p.opaque,we=p.transmissive;if(T.setupLights(),B.isArrayCamera){let Le=B.cameras;if(we.length>0)for(let Ie=0,Ge=Le.length;Ie<Ge;Ie++){let Qe=Le[Ie];Xn(xe,we,C,Qe)}te&&Ve.render(C);for(let Ie=0,Ge=Le.length;Ie<Ge;Ie++){let Qe=Le[Ie];Wn(p,C,Qe,Qe.viewport)}}else we.length>0&&Xn(xe,we,C,B),te&&Ve.render(C),Wn(p,C,B)}W!==null&&j===0&&(G.updateMultisampleRenderTarget(W),G.updateRenderTargetMipmap(W)),Y&&f.end(_),C.isScene===!0&&C.onAfterRender(_,C,B),Pe.resetDefaultState(),ee=-1,q=null,R.pop(),R.length>0?(T=R[R.length-1],G.setTextureUnits(T.state.textureUnits),re===!0&&Ne.setGlobalState(_.clippingPlanes,T.state.camera)):T=null,v.pop(),p=v.length>0?v[v.length-1]:null,w!==null&&w.renderEnd()};function Fa(C,B,Q,Y){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(ne)){Y&&Z.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);let xe=z.update(C),we=C.material;we.visible&&p.push(C,xe,we,Q,Z.z,null,B)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(ne))){let xe=z.update(C),we=C.material;if(Y&&(C.boundingSphere===void 0?(xe.boundingSphere===null&&xe.computeBoundingSphere(),Z.copy(xe.boundingSphere.center)):(C.boundingSphere===null&&C.computeBoundingSphere(),Z.copy(C.boundingSphere.center)),Z.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(we)){let Le=xe.groups;for(let Ie=0,Ge=Le.length;Ie<Ge;Ie++){let Qe=Le[Ie],rt=we[Qe.materialIndex];rt&&rt.visible&&p.push(C,xe,rt,Q,Z.z,Qe,B)}}else we.visible&&p.push(C,xe,we,Q,Z.z,null,B)}}let X=C.children;for(let xe=0,we=X.length;xe<we;xe++)Fa(X[xe],B,Q,Y)}function Wn(C,B,Q,Y){let{opaque:X,transmissive:xe,transparent:we}=C;T.setupLightsView(Q),re===!0&&Ne.setGlobalState(_.clippingPlanes,Q),Y&&P.viewport($.copy(Y)),X.length>0&&Xr(X,B,Q),xe.length>0&&Xr(xe,B,Q),we.length>0&&Xr(we,B,Q),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Xn(C,B,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){let rt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new Gt(1,1,{generateMipmaps:!0,type:rt?xi:_i,minFilter:za,samples:Math.max(4,ye.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let X=T.state.transmissionRenderTarget[Y.id],xe=Y.viewport||$;X.setSize(xe.z*_.transmissionResolutionScale,xe.w*_.transmissionResolutionScale);let we=_.getRenderTarget(),Le=_.getActiveCubeFace(),Ie=_.getActiveMipmapLevel();_.setRenderTarget(X),_.getClearColor(ge),Ke=_.getClearAlpha(),Ke<1&&_.setClearColor(16777215,.5),_.clear(),te&&Ve.render(Q);let Ge=_.toneMapping;_.toneMapping=0;let Qe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),re===!0&&Ne.setGlobalState(_.clippingPlanes,Y),Xr(C,Q,Y),G.updateMultisampleRenderTarget(X),G.updateRenderTargetMipmap(X),le.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Be=0,ht=B.length;Be<ht;Be++){let{object:_t,geometry:dt,material:nt,group:At}=B[Be];if(nt.side===2&&_t.layers.test(Y.layers)){let Ue=nt.side;nt.side=1,nt.needsUpdate=!0,jn(_t,Q,Y,dt,nt,At),nt.side=Ue,nt.needsUpdate=!0,rt=!0}}rt===!0&&(G.updateMultisampleRenderTarget(X),G.updateRenderTargetMipmap(X))}_.setRenderTarget(we,Le,Ie),_.setClearColor(ge,Ke),Qe!==void 0&&(Y.viewport=Qe),_.toneMapping=Ge}function Xr(C,B,Q){let Y=B.isScene===!0?B.overrideMaterial:null;for(let X=0,xe=C.length;X<xe;X++){let we=C[X],{object:Le,geometry:Ie,group:Ge}=we,Qe=we.material;Qe.allowOverride===!0&&Y!==null&&(Qe=Y),Le.layers.test(Q.layers)&&jn(Le,B,Q,Ie,Qe,Ge)}}function jn(C,B,Q,Y,X,xe){w!==null&&X.isNodeMaterial&&w.setObject(C,X),C.onBeforeRender(_,B,Q,Y,X,xe),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(_,B,Q,Y,C,xe),X.transparent===!0&&X.side===2&&X.forceSinglePass===!1?(X.side=1,X.needsUpdate=!0,_.renderBufferDirect(Q,B,Y,X,C,xe),X.side=0,X.needsUpdate=!0,_.renderBufferDirect(Q,B,Y,X,C,xe),X.side=2):_.renderBufferDirect(Q,B,Y,X,C,xe),C.onAfterRender(_,B,Q,Y,X,xe)}function jr(C,B,Q){B.isScene!==!0&&(B=H);let Y=D.get(C),X=T.state.lights,xe=T.state.shadowsArray,we=X.state.version,Le=ce.getParameters(C,X.state,xe,B,Q,T.state.lightProbeGridArray),Ie=ce.getProgramCacheKey(Le),Ge=Y.programs;Y.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let Qe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Y.envMap=K.get(C.envMap||Y.environment,Qe),Y.envMapRotation=Y.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,Ge===void 0&&(C.addEventListener("dispose",Qt),Ge=new Map,Y.programs=Ge);let rt=Ge.get(Ie);if(rt!==void 0){if(Y.currentProgram===rt&&Y.lightsStateVersion===we)return Yn(C,Le),rt}else Le.uniforms=ce.getUniforms(C),w!==null&&C.isNodeMaterial&&w.build(C,Q,Le),C.onBeforeCompile(Le,_),rt=ce.acquireProgram(Le,Ie),Ge.set(Ie,rt),Y.uniforms=Le.uniforms;let Be=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=Ne.uniform),Yn(C,Le),Y.needsLights=bl(C),Y.lightsStateVersion=we,Y.needsLights&&(Be.ambientLightColor.value=X.state.ambient,Be.lightProbe.value=X.state.probe,Be.sunLights.value=X.state.sun,Be.sunLightShadows.value=X.state.sunShadow,Be.directionalLights.value=X.state.directional,Be.directionalLightShadows.value=X.state.directionalShadow,Be.spotLights.value=X.state.spot,Be.spotLightShadows.value=X.state.spotShadow,Be.rectAreaLights.value=X.state.rectArea,Be.ltc_1.value=X.state.rectAreaLTC1,Be.ltc_2.value=X.state.rectAreaLTC2,Be.pointLights.value=X.state.point,Be.pointLightShadows.value=X.state.pointShadow,Be.hemisphereLights.value=X.state.hemi,Be.sunShadowMatrix.value=X.state.sunShadowMatrix,Be.sunShadowCascade.value=X.state.sunShadowCascade,Be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Be.spotLightMatrix.value=X.state.spotLightMatrix,Be.spotLightMap.value=X.state.spotLightMap,Be.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.lightProbeGrid=T.state.lightProbeGridArray.length>0,Y.currentProgram=rt,Y.uniformsList=null,rt}function qn(C){if(C.uniformsList===null){let B=C.currentProgram.getUniforms();C.uniformsList=Ca.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function Yn(C,B){let Q=D.get(C);Q.outputColorSpace=B.outputColorSpace,Q.batching=B.batching,Q.batchingColor=B.batchingColor,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.instancingMorph=B.instancingMorph,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function Sl(C,B){if(C.length===0)return null;if(C.length===1)return C[0].texture===null?null:C[0];b.setFromMatrixPosition(B.matrixWorld);for(let Q=0,Y=C.length;Q<Y;Q++){let X=C[Q];if(X.texture!==null&&X.boundingBox.containsPoint(b))return X}return null}function Ml(C,B,Q,Y,X){B.isScene!==!0&&(B=H),G.resetTextureUnits();let xe=B.fog,we=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,Le=W===null?_.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:it.workingColorSpace,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ge=K.get(Y.envMap||we,Ie),Qe=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,rt=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!Q.morphAttributes.position,ht=!!Q.morphAttributes.normal,_t=!!Q.morphAttributes.color,dt=0;Y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(dt=_.toneMapping);let nt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,At=nt===void 0?0:nt.length,Ue=D.get(Y),Dt=T.state.lights;if(re===!0&&(fe===!0||C!==q)){let ut=C===q&&Y.id===ee;Ne.setState(Y,C,ut)}let Ot=!1;Y.version===Ue.__version?Ue.needsLights&&Ue.lightsStateVersion!==Dt.state.version?Ot=!0:Ue.outputColorSpace===Le?X.isBatchedMesh&&Ue.batching===!1||!X.isBatchedMesh&&Ue.batching===!0||X.isBatchedMesh&&Ue.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ue.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ue.instancing===!1||!X.isInstancedMesh&&Ue.instancing===!0||X.isSkinnedMesh&&Ue.skinning===!1||!X.isSkinnedMesh&&Ue.skinning===!0||X.isInstancedMesh&&Ue.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ue.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ue.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ue.instancingMorph===!1&&X.morphTexture!==null?Ot=!0:Ue.envMap===Ge?Y.fog===!0&&Ue.fog!==xe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Ne.numPlanes||Ue.numIntersection!==Ne.numIntersection)?Ot=!0:Ue.vertexAlphas===Qe&&Ue.vertexTangents===rt&&Ue.morphTargets===Be&&Ue.morphNormals===ht&&Ue.morphColors===_t&&Ue.toneMapping===dt&&Ue.morphTargetsCount===At?!!Ue.lightProbeGrid!=T.state.lightProbeGridArray.length>0&&(Ot=!0):Ot=!0:Ot=!0:Ot=!0:(Ot=!0,Ue.__version=Y.version);let kt=Ue.currentProgram;Ot===!0&&(kt=jr(Y,B,X),w&&Y.isNodeMaterial&&w.onUpdateProgram(Y,kt,Ue));let ei=!1,gi=!1,ki=!1,ct=kt.getUniforms(),xt=Ue.uniforms;if(P.useProgram(kt.program)&&(ei=!0,gi=!0,ki=!0),Y.id!==ee&&(ee=Y.id,gi=!0),Ue.needsLights){let ut=Sl(T.state.lightProbeGridArray,X);Ue.lightProbeGrid!==ut&&(Ue.lightProbeGrid=ut,gi=!0)}if(ei||q!==C){P.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ct.setValue(I,"projectionMatrix",C.projectionMatrix),ct.setValue(I,"viewMatrix",C.matrixWorldInverse);let ut=ct.map.cameraPosition;ut!==void 0&&ut.setValue(I,Re.setFromMatrixPosition(C.matrixWorld)),ye.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ct.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),q!==C&&(q=C,gi=!0,ki=!0)}if(Ue.needsLights&&(Dt.state.sunShadowMap.length>0&&ct.setValue(I,"sunShadowMap",Dt.state.sunShadowMap,G),Dt.state.directionalShadowMap.length>0&&ct.setValue(I,"directionalShadowMap",Dt.state.directionalShadowMap,G),Dt.state.spotShadowMap.length>0&&ct.setValue(I,"spotShadowMap",Dt.state.spotShadowMap,G),Dt.state.pointShadowMap.length>0&&ct.setValue(I,"pointShadowMap",Dt.state.pointShadowMap,G)),X.isSkinnedMesh){ct.setOptional(I,X,"bindMatrix"),ct.setOptional(I,X,"bindMatrixInverse");let ut=X.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),ct.setValue(I,"boneTexture",ut.boneTexture,G))}X.isBatchedMesh&&(ct.setOptional(I,X,"batchingTexture"),ct.setValue(I,"batchingTexture",X._matricesTexture,G),ct.setOptional(I,X,"batchingIdTexture"),ct.setValue(I,"batchingIdTexture",X._indirectTexture,G),ct.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&ct.setValue(I,"batchingColorTexture",X._colorsTexture,G));let vi=Q.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&tt.update(X,Q,kt),(gi||Ue.receiveShadow!==X.receiveShadow)&&(Ue.receiveShadow=X.receiveShadow,ct.setValue(I,"receiveShadow",X.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(xt.envMapIntensity.value=B.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=Vp()),gi){if(ct.setValue(I,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&yl(xt,ki),xe&&Y.fog===!0&&me.refreshFogUniforms(xt,xe),me.refreshMaterialUniforms(xt,Y,oe,ie,T.state.transmissionRenderTarget[C.id]),Ue.needsLights&&Ue.lightProbeGrid){let ut=Ue.lightProbeGrid;xt.probesSH.value=ut.texture,xt.probesMin.value.copy(ut.boundingBox.min),xt.probesMax.value.copy(ut.boundingBox.max),xt.probesResolution.value.copy(ut.resolution)}Ca.upload(I,qn(Ue),xt,G)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ca.upload(I,qn(Ue),xt,G),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ct.setValue(I,"center",X.center),ct.setValue(I,"modelViewMatrix",X.modelViewMatrix),ct.setValue(I,"normalMatrix",X.normalMatrix),ct.setValue(I,"modelMatrix",X.matrixWorld),Y.uniformsGroups!==void 0){let ut=Y.uniformsGroups;for(let gr=0,Hi=ut.length;gr<Hi;gr++){let Jn=ut[gr];Oe.update(Jn,kt),Oe.bind(Jn,kt)}}return kt}function yl(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.sunLights.needsUpdate=B,C.sunLightShadows.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function bl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,B,Q){let Y=D.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),D.get(C.texture).__webglTexture=B,D.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,B){let Q=D.get(C);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,Q=0){W=C,F=B,j=Q;let Y=null,X=!1,xe=!1;if(C){let we=D.get(C);if(we.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(I.FRAMEBUFFER,we.__webglFramebuffer),$.copy(C.viewport),k.copy(C.scissor),Te=C.scissorTest,P.viewport($),P.scissor(k),P.setScissorTest(Te),ee=-1;return}else if(we.__webglFramebuffer===void 0)G.setupRenderTarget(C);else if(we.__hasExternalTextures)G.rebindTextures(C,D.get(C.texture).__webglTexture,D.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ge=C.depthTexture;if(we.__boundDepthTexture!==Ge){if(Ge!==null&&D.has(Ge)&&(C.width!==Ge.image.width||C.height!==Ge.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(C)}}let Le=C.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(xe=!0);let Ie=D.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Y=Array.isArray(Ie[B])?Ie[B][Q]:Ie[B],X=!0):Y=C.samples>0&&G.useMultisampledRTT(C)===!1?D.get(C).__webglMultisampledFramebuffer:Array.isArray(Ie)?Ie[Q]:Ie,$.copy(C.viewport),k.copy(C.scissor),Te=C.scissorTest}else $.copy(ze).multiplyScalar(oe).floor(),k.copy(_e).multiplyScalar(oe).floor(),Te=Ze;if(Q!==0&&(Y=L),P.bindFramebuffer(I.FRAMEBUFFER,Y)&&P.drawBuffers(C,Y),P.viewport($),P.scissor(k),P.setScissorTest(Te),X){let we=D.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,Q)}else if(xe){let we=B;for(let Le=0;Le<C.textures.length;Le++){let Ie=D.get(C.textures[Le]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Le,Ie.__webglTexture,Q,we)}}else if(C!==null&&Q!==0){let we=D.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,we.__webglTexture,Q)}ee=-1};function Zn(C){let B=D.get(C);return(B.__readFormat!==C.format||B.__readType!==C.type)&&(B.__readFormat=C.format,B.__readType=C.type,B.__formatReadable=ye.textureFormatReadable(C.format),B.__typeReadable=ye.textureTypeReadable(C.type)),B}this.readRenderTargetPixels=function(C,B,Q,Y,X,xe,we,Le=0){if(!(C&&C.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){P.bindFramebuffer(I.FRAMEBUFFER,Ie);try{let Ge=C.textures[Le],Qe=Ge.format,rt=Ge.type;C.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le);let Be=Zn(Ge);if(Be.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-Y&&Q>=0&&Q<=C.height-X&&I.readPixels(B,Q,Y,X,ue.convert(Qe),ue.convert(rt),xe)}finally{let Ge=W===null?null:D.get(W).__webglFramebuffer;P.bindFramebuffer(I.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,B,Q,Y,X,xe,we,Le=0){if(!(C&&C.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie)if(B>=0&&B<=C.width-Y&&Q>=0&&Q<=C.height-X){P.bindFramebuffer(I.FRAMEBUFFER,Ie);let Ge=C.textures[Le],Qe=Ge.format,rt=Ge.type;C.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le);let Be=Zn(Ge);if(Be.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ht),I.bufferData(I.PIXEL_PACK_BUFFER,xe.byteLength,I.STREAM_READ),I.readPixels(B,Q,Y,X,ue.convert(Qe),ue.convert(rt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let _t=W===null?null:D.get(W).__webglFramebuffer;P.bindFramebuffer(I.FRAMEBUFFER,_t);let dt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wh(I,dt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ht),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xe),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ht),I.deleteSync(dt),xe}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,B=null,Q=0){let Y=2**-Q,X=Math.floor(C.image.width*Y),xe=Math.floor(C.image.height*Y),we=B===null?0:B.x,Le=B===null?0:B.y;G.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,Q,0,0,we,Le,X,xe),P.unbindTexture()},this.copyTextureToTexture=function(C,B,Q=null,Y=null,X=0,xe=0){let we,Le,Ie,Ge,Qe,rt,Be,ht,_t,dt=C.isCompressedTexture?C.mipmaps[xe]:C.image;if(Q!==null)we=Q.max.x-Q.min.x,Le=Q.max.y-Q.min.y,Ie=Q.isBox3?Q.max.z-Q.min.z:1,Ge=Q.min.x,Qe=Q.min.y,rt=Q.isBox3?Q.min.z:0;else{let xt=2**-X;we=Math.floor(dt.width*xt),Le=Math.floor(dt.height*xt),Ie=C.isDataArrayTexture?dt.depth:C.isData3DTexture?Math.floor(dt.depth*xt):1,Ge=0,Qe=0,rt=0}Y===null?(Be=0,ht=0,_t=0):(Be=Y.x,ht=Y.y,_t=Y.z);let nt=ue.convert(B.format),At=ue.convert(B.type),Ue;B.isData3DTexture?(G.setTexture3D(B,0),Ue=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(G.setTexture2DArray(B,0),Ue=I.TEXTURE_2D_ARRAY):(G.setTexture2D(B,0),Ue=I.TEXTURE_2D),P.activeTexture(I.TEXTURE0),P.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);let Dt=P.getParameter(I.UNPACK_ROW_LENGTH),Ot=P.getParameter(I.UNPACK_IMAGE_HEIGHT),kt=P.getParameter(I.UNPACK_SKIP_PIXELS),ei=P.getParameter(I.UNPACK_SKIP_ROWS),gi=P.getParameter(I.UNPACK_SKIP_IMAGES);P.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),P.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),P.pixelStorei(I.UNPACK_SKIP_PIXELS,Ge),P.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),P.pixelStorei(I.UNPACK_SKIP_IMAGES,rt);let ki=C.isDataArrayTexture||C.isData3DTexture,ct=B.isDataArrayTexture||B.isData3DTexture;if(C.isDepthTexture){let xt=D.get(C),vi=D.get(B),ut=D.get(xt.__renderTarget),gr=D.get(vi.__renderTarget);P.bindFramebuffer(I.READ_FRAMEBUFFER,ut.__webglFramebuffer),P.bindFramebuffer(I.DRAW_FRAMEBUFFER,gr.__webglFramebuffer);for(let Hi=0;Hi<Ie;Hi++)ki&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,D.get(C).__webglTexture,X,rt+Hi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,D.get(B).__webglTexture,xe,_t+Hi)),I.blitFramebuffer(Ge,Qe,we,Le,Be,ht,we,Le,I.DEPTH_BUFFER_BIT,I.NEAREST);P.bindFramebuffer(I.READ_FRAMEBUFFER,null),P.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||C.isRenderTargetTexture||D.has(C)){let xt=D.get(C),vi=D.get(B);P.bindFramebuffer(I.READ_FRAMEBUFFER,U),P.bindFramebuffer(I.DRAW_FRAMEBUFFER,N);for(let ut=0;ut<Ie;ut++)ki?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.__webglTexture,X,rt+ut):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xt.__webglTexture,X),ct?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vi.__webglTexture,xe,_t+ut):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vi.__webglTexture,xe),X===0?ct?I.copyTexSubImage3D(Ue,xe,Be,ht,_t+ut,Ge,Qe,we,Le):I.copyTexSubImage2D(Ue,xe,Be,ht,Ge,Qe,we,Le):I.blitFramebuffer(Ge,Qe,we,Le,Be,ht,we,Le,I.COLOR_BUFFER_BIT,I.NEAREST);P.bindFramebuffer(I.READ_FRAMEBUFFER,null),P.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ct?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(Ue,xe,Be,ht,_t,we,Le,Ie,nt,At,dt.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Ue,xe,Be,ht,_t,we,Le,Ie,nt,dt.data):I.texSubImage3D(Ue,xe,Be,ht,_t,we,Le,Ie,nt,At,dt):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xe,Be,ht,we,Le,nt,At,dt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xe,Be,ht,dt.width,dt.height,nt,dt.data):I.texSubImage2D(I.TEXTURE_2D,xe,Be,ht,we,Le,nt,At,dt);P.pixelStorei(I.UNPACK_ROW_LENGTH,Dt),P.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ot),P.pixelStorei(I.UNPACK_SKIP_PIXELS,kt),P.pixelStorei(I.UNPACK_SKIP_ROWS,ei),P.pixelStorei(I.UNPACK_SKIP_IMAGES,gi),xe===0&&B.generateMipmaps&&I.generateMipmap(Ue),P.unbindTexture()},this.initRenderTarget=function(C){D.get(C).__webglFramebuffer===void 0&&G.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?G.setTextureCube(C,0):C.isData3DTexture?G.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?G.setTexture2DArray(C,0):G.setTexture2D(C,0),P.unbindTexture()},this.resetState=function(){F=0,j=0,W=null,P.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}},Go={value:0},Hp=new Set(["#d8aa51","#ad9563","#bea16a","#d9ad55","#d8a84c","#efd176","#e6c077","#e0b04d","#b49050","#c69a3e","#b8995c","#e8c27a"]),Gp=new Set(["#b72f28","#a52b24","#aa5438","#ac573b","#b3322b"]),Wp=new Set(["#344e46","#425c50","#40584d","#4a6053","#3e584b","#84704e","#3e5149","#354b46","#53635a","#4d6054"]),Xp=new Set(["#688544","#8ca65a","#4b713b","#8fae5a","#a6bf6a","#53783c"]),pr=[{value:1e5},{value:1e5},{value:1e5},{value:1e5}],jp=e=>{let t=0;for(let i of pr){let r=(e-i.value)/15;if(Math.abs(r)<1){let a=Math.cos(1.5707963*r);t+=1.6*a*a}}return t};function On(e,t){return Hp.has(t)?(e.metalness=.85,e.roughness=.3):Gp.has(t)?e.roughness=.34:Wp.has(t)?(e.roughness=.38,e.metalness=.22):t==="#c74e32"||t==="#bc6042"?(e.emissive.set("#d0300c"),e.emissiveIntensity=.8):t==="#83a68a"?e.roughness=.16:Xp.has(t)?e.defines={GARDEN_WIND:""}:(t==="#c4c1b2"||t==="#a8a596")&&(e.defines={NO_ARCH:""}),e}function Vi(){if(!Vi.tex){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),i=t.createImageData(256,256),r=2*Math.PI/256,a=(s,o)=>Math.sin(s*r*3+Math.sin(o*r*2)*1.5)*.5+Math.sin(o*r*5+s*r*2)*.35+Math.sin((s+o)*r*7)*.15;for(let s=0;s<256;s++)for(let o=0;o<256;o++){let l=-(a(o+1,s)-a(o-1,s))*3,c=-(a(o,s+1)-a(o,s-1))*3,m=Math.hypot(l,c,1),x=(s*256+o)*4;i.data[x]=l/m*127.5+127.5,i.data[x+1]=c/m*127.5+127.5,i.data[x+2]=1/m*127.5+127.5,i.data[x+3]=255}t.putImageData(i,0,0);let n=new Xt(e);n.wrapS=n.wrapT=1e3,n.repeat.set(5,8),Vi.tex=n}return Vi.tex}function qp(){let e=[];function t(S=512){let d=document.createElement("canvas");return d.width=d.height=S,d}function i(S,d=!0){let h=new Xt(S);return h.colorSpace=d?ft:"",h.wrapS=h.wrapT=vr,h.anisotropy=8,e.push(h),h}let r=73,a=()=>(r=r*1664525+1013904223>>>0,r/4294967296),n=new Map;for(let S of["plaster","wood","bark","tile","rock","brick","paper","grass","paving","lime","granite"]){let d=t(),h=d.getContext("2d");h.fillStyle=S==="tile"?"#b8bbb5":"#ded6c5",h.fillRect(0,0,512,512);for(let u=0;u<26e3;u++){let y=100+Math.floor(a()*145);h.fillStyle=`rgba(${y},${y},${y},${S==="plaster"?.13:.22})`,h.fillRect(a()*512,a()*512,1+a()*3,1+a()*3)}if(S==="wood"||S==="bark")for(let u=0;u<150;u++){let y=a()*512;h.strokeStyle=`rgba(58,38,20,${.06+a()*.24})`,h.lineWidth=S==="bark"?1+a()*4:.5+a(),h.beginPath();for(let b=0;b<=512;b+=8){let p=y+Math.sin(b*.025+u)*3+Math.sin(b*.007+u)*7;b===0?h.moveTo(p,b):h.lineTo(p,b)}h.stroke()}if(S==="plaster")for(let u=0;u<65;u++){let y=a()*512,b=a()*512,p=12+a()*45,T=h.createRadialGradient(y,b,0,y,b,p);T.addColorStop(0,"rgba(115,105,77,.08)"),T.addColorStop(1,"rgba(115,105,77,0)"),h.fillStyle=T,h.fillRect(y-p,b-p,p*2,p*2)}if(S==="tile")for(let u=0;u<512;u+=64)for(let y=0;y<512;y+=64)h.fillStyle=`rgba(35,43,40,${.06+a()*.13})`,h.fillRect(y+2,u+2,60,60),h.strokeStyle="rgba(35,42,39,.5)",h.lineWidth=3,h.strokeRect(y,u,64,64),h.strokeStyle="rgba(240,240,225,.3)",h.beginPath(),h.moveTo(y+5,u+6),h.lineTo(y+59,u+6),h.stroke();if(S==="paper"){for(let u=0;u<512;u+=32)h.fillStyle="rgba(75,38,20,.4)",h.fillRect(u,0,3,512),h.fillStyle="rgba(255,233,172,.32)",h.fillRect(u+4,0,2,512);h.strokeStyle="#c6ad75",h.lineWidth=5;for(let u of[50,462])h.beginPath(),h.moveTo(0,u),h.lineTo(512,u),h.stroke();h.font="bold 100px KaiTi, serif",h.textAlign="center",h.fillStyle="#efd49a",h.fillText("\u798F",128,295),h.fillText("\u6625",384,295)}if(S==="brick"){h.fillStyle="#b9b6aa",h.fillRect(0,0,512,512);for(let u=0;u<16;u++)for(let y=-1;y<9;y++){let b=y*64+u%2*32,p=u*32,T=115+Math.floor(a()*35);h.fillStyle=`rgb(${T},${T+3},${T})`,h.fillRect(b+2,p+2,60,28),h.fillStyle="rgba(225,224,210,.22)",h.fillRect(b+3,p+3,58,2);for(let v=0;v<14;v++)h.fillStyle="rgba(43,48,40,.12)",h.fillRect(b+a()*60,p+a()*28,2,2)}}if(S==="rock"){for(let u=0;u<90;u++){let y=a()*512;h.strokeStyle=u%3?"rgba(61,60,49,.38)":"rgba(245,232,204,.5)",h.lineWidth=1+a()*7,h.beginPath();for(let b=0;b<=512;b+=12){let p=y+Math.sin(b*.018+u)*11+Math.sin(b*.053+u)*3;b===0?h.moveTo(b,p):h.lineTo(b,p)}h.stroke()}for(let u=0;u<22;u++){let y=a()*512,b=a()*512;h.strokeStyle="rgba(40,43,35,.65)",h.lineWidth=1+a()*2,h.beginPath(),h.moveTo(y,b),h.lineTo(y+12,b+20),h.lineTo(y+5,b+40),h.lineTo(y+22,b+61),h.stroke()}for(let u=0;u<1600;u++)h.fillStyle=u%2?"rgba(65,83,39,.24)":"rgba(130,143,69,.3)",h.fillRect(a()*512,350+a()*162,1+a()*6,1+a()*4)}if(S==="lime"||S==="granite"){h.fillStyle=S==="lime"?"#f3f2ef":"#d2d4d5",h.fillRect(0,0,512,512);for(let u=0;u<18e3;u++){let y=S==="lime"?175+Math.floor(a()*65):85+Math.floor(a()*140);h.fillStyle=`rgba(${y},${y},${y},${S==="lime"?.22:.28})`,h.fillRect(a()*512,a()*512,1+a()*2,1+a()*2)}if(S==="lime")for(let u=0;u<90;u++){let y=a()*512,b=a()*512,p=12+a()*42,T=h.createRadialGradient(y,b,0,y,b,p);T.addColorStop(0,"rgba(126,126,121,.085)"),T.addColorStop(1,"rgba(126,126,121,0)"),h.fillStyle=T,h.fillRect(y-p,b-p,p*2,p*2)}}if(S==="paving"){h.fillStyle="#858d89",h.fillRect(0,0,512,512);for(let u=0;u<4;u++)for(let y=0;y<4;y++){let b=y*128,p=u*128,T=178+Math.floor(a()*25);h.fillStyle=`rgb(${T},${T+2},${T-5})`,h.fillRect(b+2,p+2,124,124),h.strokeStyle="rgba(245,242,226,.55)",h.lineWidth=2,h.strokeRect(b+4,p+4,119,119);for(let v=0;v<350;v++)h.fillStyle=v%2?"rgba(79,85,77,.12)":"rgba(250,246,223,.2)",h.fillRect(b+4+a()*118,p+4+a()*118,1+a()*3,1+a()*2);h.strokeStyle="rgba(103,110,97,.15)",h.lineWidth=1,h.beginPath(),h.moveTo(b+15,p+30),h.bezierCurveTo(b+50,p+20,b+45,p+95,b+112,p+100),h.stroke()}}if(S==="grass"){h.fillStyle="#a6b487",h.fillRect(0,0,512,512);for(let u=0;u<9e3;u++){let y=a()*512,b=a()*512,p=4+a()*16,T=(a()-.5)*10;h.strokeStyle=["#647957","#c8cc96","#8d9d6b","#b1bd84"][u%4],h.lineWidth=.5+a()*1.2;for(let v of[-512,0,512])for(let R of[-512,0,512])h.beginPath(),h.moveTo(y+v,b+R),h.quadraticCurveTo(y+v+T*.3,b+R-p*.6,y+v+T,b+R-p),h.stroke()}}n.set(S,{map:i(d),bumpMap:i(d,!1)})}function s(S=!1){let d=t(),h=d.getContext("2d");for(let u=0;u<24;u++){let y=64+a()*384,b=45+a()*420,p=a()*Math.PI*2;h.save(),h.translate(y,b),h.rotate(p);let T=h.createLinearGradient(-22,0,22,0);T.addColorStop(0,"#294f2b"),T.addColorStop(.5,"#91aa53"),T.addColorStop(1,"#456c35"),h.fillStyle=T,h.beginPath(),h.moveTo(0,-48),h.bezierCurveTo(35,-18,27,20,0,45),h.bezierCurveTo(-27,20,-35,-18,0,-48),h.fill(),h.strokeStyle="#b0b77a",h.lineWidth=1.3,h.beginPath(),h.moveTo(0,-43),h.lineTo(0,43);for(let v=-25;v<30;v+=12)h.moveTo(0,v+8),h.lineTo(18,v-6),h.moveTo(0,v+8),h.lineTo(-18,v-6);if(h.stroke(),S&&u%2==0){for(let v=0;v<5;v++)h.save(),h.rotate(v*Math.PI*2/5),h.fillStyle=v%2?"#efbac5":"#f9d8d6",h.beginPath(),h.ellipse(0,-13,9,15,0,0,Math.PI*2),h.fill(),h.restore();h.fillStyle="#e2b554",h.beginPath(),h.arc(0,0,4,0,Math.PI*2),h.fill()}h.restore()}return new $t({map:i(d),alphaTest:.45,alphaToCoverage:!0,side:2,roughness:.86})}let o=s(),l=s(!0);function c(){let S=t(),d=S.getContext("2d");for(let h=0;h<16;h++){d.strokeStyle=h%2?"#3b2a22":"#4a3328",d.lineWidth=2+a()*4,d.lineCap="round",d.beginPath();let u=a()*512,y=a()*512;d.moveTo(u,y);for(let b=0;b<4;b++)u+=(a()-.5)*150,y+=(a()-.5)*150,d.lineTo(u,y);d.stroke()}for(let h=0;h<110;h++){let u=24+a()*464,y=24+a()*464,b=6+a()*8;d.save(),d.translate(u,y),d.rotate(a()*6.3);for(let p=0;p<5;p++)d.rotate(Math.PI*2/5),d.fillStyle=h%3?"#b8202f":"#d8404f",d.beginPath(),d.ellipse(0,-b*.85,b*.62,b*.8,0,0,Math.PI*2),d.fill();d.fillStyle="#f1cf62",d.beginPath(),d.arc(0,0,b*.28,0,Math.PI*2),d.fill(),d.restore()}return new $t({map:i(S),alphaTest:.45,alphaToCoverage:!0,side:2,roughness:.8})}let m=c();function x(){let S=t(),d=S.getContext("2d");for(let u=0;u<7;u++){let y=36+u*70+(a()-.5)*20,b=p=>y+Math.sin(p*.012+u)*10;d.strokeStyle="#6b6a3a",d.lineWidth=1.6,d.beginPath(),d.moveTo(y,0);for(let p=0;p<=512;p+=16)d.lineTo(b(p),p);d.stroke();for(let p=6;p<505;p+=6)for(let T of[-1,1])d.save(),d.translate(b(p),p),d.rotate(T*(.35+a()*.3)),d.fillStyle=["#6f9a3c","#86ad48","#5d8634","#9fbe58"][Math.floor(a()*4)],d.beginPath(),d.ellipse(T*6,5,2.8,10.5,0,0,Math.PI*2),d.fill(),d.restore()}let h=new $t({map:i(S),alphaTest:.4,alphaToCoverage:!0,side:2,roughness:.75});return h.defines={GARDEN_WIND:""},h}let g=x();for(let S of[o,l,m])S.defines={GARDEN_WIND:""};function M(S,d){let h=d==="#f4f3ed"?"lime":["#999da0","#6d7377","#babdbf"].includes(d)?"granite":d==="#b9bcb6"?"paving":["#668852","#778f5e","#53783c"].includes(d)?"grass":["#c74e32","#bc6042"].includes(d)?"paper":d==="#9b9e93"?"brick":["#8d9689","#899780"].includes(d)?"rock":["#e4deca","#e1dbca","#dfd9c8","#ddd6c4"].includes(d)?"plaster":["#704638","#775141","#824333","#6d4634","#aa5438","#ac573b","#744538","#8d6350"].includes(d)?"wood":["#716951","#655540","#796047"].includes(d)?"bark":["#344e46","#425c50","#40584d","#4a6053","#3e584b","#84704e"].includes(d)?"tile":null;h&&(Object.assign(S,n.get(h)),S.bumpScale=h==="lime"?.018:h==="rock"?.16:h==="bark"?.09:h==="plaster"?.025:.045,S.roughness=h==="wood"?.72:.93)}return{apply:M,leaves:o,flowers:l,plum:m,willow:g,dispose:()=>e.forEach(S=>S.dispose())}}function Yp(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new gt,c=0;for(let m=0;m<e.length;++m){let x=e[m],g=0;if(i!==(x.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let M in x.attributes){if(!r.has(M))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+'. All geometries must have compatible attributes; make sure "'+M+'" attribute exists among all geometries, or in none of them.'),null;n[M]===void 0&&(n[M]=[]),n[M].push(x.attributes[M]),g++}if(g!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". Make sure all geometries have the same number of attributes."),null;if(o!==x.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let M in x.morphAttributes){if(!a.has(M))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+".  .morphAttributes must be consistent throughout all geometries."),null;s[M]===void 0&&(s[M]=[]),s[M].push(x.morphAttributes[M])}if(t){let M;if(i)M=x.index.count;else if(x.attributes.position!==void 0)M=x.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,M,m),c+=M}}if(i){let m=0,x=[];for(let g=0;g<e.length;++g){let M=e[g].index;for(let S=0;S<M.count;++S)x.push(M.getX(S)+m);m+=e[g].attributes.position.count}l.setIndex(x)}for(let m in n){let x=Wo(n[m]);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" attribute."),null;l.setAttribute(m,x)}for(let m in s){let x=s[m][0].length;if(x!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[m]=[];for(let g=0;g<x;++g){let M=[];for(let d=0;d<s[m].length;++d)M.push(s[m][d][g]);let S=Wo(M);if(!S)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" morphAttribute."),null;l.morphAttributes[m].push(S)}}}return l}function Wo(e){let t,i,r,a=-1,n=0;for(let c=0;c<e.length;++c){let m=e[c];if(t===void 0&&(t=m.array.constructor),t!==m.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=m.itemSize),i!==m.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=m.normalized),r!==m.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=m.gpuType),a!==m.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=m.count*i}let s=new t(n),o=new ti(s,i,r),l=0;for(let c=0;c<e.length;++c){let m=e[c];if(m.isInterleavedBufferAttribute){let x=l/i;for(let g=0,M=m.count;g<M;g++)for(let S=0;S<i;S++){let d=m.getComponent(g,S);o.setComponent(g+x,S,d)}}else s.set(m.array,l);l+=m.count*i}return a!==void 0&&(o.gpuType=a),o}function Xo(e,t){let i=new Map,r=M=>{i.has(M)||i.set(M,new $t({color:M,roughness:.92,side:2}));let S=i.get(M);return t?.apply(S,M),On(S,M),S},a=(M,S,d=e,h=0,u=0,y=0)=>{if(!M.getAttribute("uv")){let p=M.getAttribute("position"),T=[];for(let v=0;v<p.count;v++)T.push(p.getX(v)*.5,p.getZ(v)*.5);M.setAttribute("uv",new Ye(T,2))}let b=new st(M,r(S));return b.position.set(h,u,y),b.castShadow=!0,b.receiveShadow=!0,d.add(b),b},n=(M,S,d,h,u,y,b,p)=>a(new Pt(M,S,d),h,u,y,b,p),s=(M,S,d,h)=>a(new Ei(new ri(M),16,S,5,!1),d,h);function o(M,S,d,h,u){let y=Math.max(.3,S*.5-d*.24),b=S/2+.75,p=d/2+.75,T=1.55,v=(R,f,_)=>{let A=R<2?new O(f*b,0,(R===0?1:-1)*p):new O((R===2?1:-1)*b,0,f*p),w=R<2?new O(f*y,T,0):new O((R===2?1:-1)*y,T,0);return new O(Ni.lerp(w.x,A.x,_),h+T*(1-_)**2+.18*_**8+.48*Math.abs(f)**8*_**7,Ni.lerp(w.z,A.z,_))};for(let R=0;R<4;R++){let f=[],_=[];for(let L=0;L<=10;L++)for(let U=0;U<=16;U++){let N=v(R,U/16*2-1,L/10);f.push(N.x,N.y,N.z)}for(let L=0;L<10;L++)for(let U=0;U<16;U++){let N=L*17+U;_.push(N,N+1,N+16+1,N+1,N+16+2,N+16+1)}let A=new gt;A.setAttribute("position",new Ye(f,3)),A.setIndex(_),A.computeVertexNormals(),a(A,u,M);let w=Math.ceil((R<2?S:d)*3);for(let L=0;L<=w;L++)s(Array.from({length:7},(U,N)=>v(R,L/w*2-1,N/6).add(new O(0,.035,0))),.027,"#69746e",M);s(Array.from({length:17},(L,U)=>v(R,U/8-1,1)),.085,"#354b46",M),s(Array.from({length:9},(L,U)=>v(R,1,U/8)),.075,"#53635a",M)}s([new O(-y-.35,h+T+.32,0),new O(-y,h+T+.1,0),new O(y,h+T+.1,0),new O(y+.35,h+T+.32,0)],.095,"#3e5149",M)}function l(M,S,d,h,u,y,b=!1,p=!1,T=!1){let v=new lt;v.position.set(h,0,u),M.add(v);let R=b?4.4:2.7;n(S+.7,.35,d+.7,"#bab7a4",v,0,.22,0),p||n(S,R,d,"#e4deca",v,0,R/2+.4,0);let f="#704638";for(let _ of[-S/2,S/2])for(let A of[-d/2,d/2])a(new at(.13,.15,R+.2,10),f,v,_,R/2+.45,A),n(.42,.2,.42,"#a4a397",v,_,.45,A),n(.5,.14,.5,f,v,_,R+.12,A),n(.72,.12,.6,f,v,_,R+.28,A);for(let _ of[-1,1])n(S+.2,.22,.2,f,v,0,R+.25,_*d/2);n(S+.5,.16,.9,"#b5b5a3",v,0,.36,d/2+.38);for(let _=0;_<=4;_++){if(T&&_===2)continue;let A=(_/4-.5)*S;a(new at(.085,.11,R-.1,10),f,v,A,R/2+.4,d/2+.53),n(.55,.1,.25,f,v,A,R+.05,d/2+.53),n(.3,.12,.65,f,v,A,R+.18,d/2+.53),n(.72,.08,.28,"#ad9563",v,A,R+.29,d/2+.53)}n(S+.4,.16,.22,"#3e635d",v,0,R+.12,d/2+.61),n(S+.4,.045,.25,"#b8995c",v,0,R+.04,d/2+.62);for(let _=0;_<=Math.ceil(S*2);_++)n(.06,.08,d+.65,f,v,-S/2+_/Math.ceil(S*2)*S,R+.39,0);if(!p){n(S,.42,d+.02,"#9fa392",v,0,.62,0);for(let _ of[-1,1])for(let A=-1;A<=1;A++){let w=A*d*.29;n(.07,1.35,.66,"#526d64",v,_*(S/2+.025),1.68,w);for(let L=-2;L<=2;L++)n(.1,1.4,.032,f,v,_*(S/2+.07),1.68,w+L*.15);for(let L=-1;L<=1;L++)n(.1,.035,.72,f,v,_*(S/2+.07),1.68+L*.43,w)}for(let _ of[-1,1]){let A=_*(S/2+.065);n(.11,.72,d,"#9b9e93",v,A,.83,0),n(.15,.1,d+.08,"#a4a397",v,A,1.23,0);for(let w of[-d*.48,0,d*.48])n(.14,R-.4,.12,f,v,A,R/2+.6,w);if(n(.14,.16,d,f,v,A,R+.18,0),b){n(.18,.17,d+.1,f,v,A,2.97,0);for(let w of[-d*.29,0,d*.29]){n(.1,1.03,.8,"#49665c",v,A+_*.025,3.67,w);for(let L=-2;L<=2;L++)n(.16,1.09,.035,f,v,A+_*.045,3.67,w+L*.18);for(let L=-1;L<=1;L++)n(.16,.035,.86,f,v,A+_*.045,3.67+L*.44,w);n(.22,.1,.98,"#ad9563",v,A,3.09,w)}}}if(b){for(let _=-2;_<=2;_++){n(.66,1.05,.09,"#49665c",v,_*S*.19,3.65,d/2+.06);for(let A=-1;A<=1;A++)n(.025,1.1,.13,f,v,_*S*.19+A*.23,3.65,d/2+.1)}n(S+.2,.13,.7,f,v,0,2.99,d/2+.25);for(let _=0;_<=10;_++)n(.055,.55,.055,f,v,(_/10-.5)*S,3.28,d/2+.65);n(S,.07,.08,f,v,0,3.55,d/2+.65)}}if(!p)for(let _=-1;_<=1;_++){let A=_*S*.29,w=S<3?.43:.9;n(w,1.65,.08,"#394f49",v,A,1.65,d/2+.05);for(let L=-2;L<=2;L++)n(.035,1.7,.09,f,v,A+L*w/4,1.65,d/2+.11);for(let L=-2;L<=2;L++)n(w,.04,.09,f,v,A,1.65+L*.33,d/2+.11);n(w+.15,.12,.14,f,v,A,.78,d/2+.1)}o(v,S,d,R+.5,y),b&&o(v,S+.45,d+.45,2.7,y);for(let _=0;_<3;_++)n(1.8,.12*(3-_),.4,"#b7b7a8",v,0,.06*(3-_),d/2+.55+_*.35);if(S>3)for(let _ of[-1,1]){n(.035,.5,.035,f,v,_*(S/2-.4),2.5,d/2+.35);let A=a(new Mt(.22,10,8),"#bc6042",v,_*(S/2-.4),2.2,d/2+.35);A.scale.y=1.3,n(.2,.07,.2,"#bea16a",v,_*(S/2-.4),1.9,d/2+.35)}}function c(M,S,d,h=!1){let u=new lt;u.position.set(M,0,S),e.add(u),s([new O(0,0,0),new O(.12*d,1.5*d,0),new O(-.3*d,3*d,.1*d)],.13*d,"#716951",u);let y=M*1.37+S*.73;for(let b=0;b<8;b++){let p=b*2.399+y,T=d*(.65+b%3*.23),v=new O(Math.cos(p)*T,(2.15+b%4*.31)*d,Math.sin(p)*T),R=new O(v.x*.48,v.y*.76,v.z*.45);s([new O(.05*d,1.1*d,0),R,v],.047*d,"#655540",u);for(let f=0;f<4;f++){let _=p+f*1.8,A=v.clone().add(new O(Math.cos(_)*.48*d,f%2*.23*d,Math.sin(_)*.48*d));s([R,v,A],.018*d,"#796047",u);for(let w=0;w<5;w++){let L=_+w*2.4,U=new st(new Kt(d*.75,d*.85),h==="plum"?t?.plum:h?t?.flowers:t?.leaves);U.position.set(A.x+Math.cos(L)*.24*d,A.y+Math.sin(w*1.7)*.2*d,A.z+Math.sin(L)*.24*d),U.rotation.set(w*.65,L,f*.6),U.castShadow=!0,U.receiveShadow=!0,u.add(U)}}}for(let b=0;b<5;b++){let p=b*1.256;s([new O(Math.cos(p)*.38*d,.03,Math.sin(p)*.38*d),new O(.03,.35*d,0),new O(.06,.7*d,0)],.045*d,"#655540",u)}x(u)}function m(M,S,d,h){let u=3.5+h%4*.4;a(new at(.04,.065,u,5),"#677954",M,S,u/2,d);for(let y=1;y<=4;y++){let b=u*.2*y,p=y%2?1:-1;n(.15,.025,.15,"#a5ae83",M,S,b,d);for(let T=0;T<3;T++){let v=new st(new Kt(.9,.45),t.leaves);v.position.set(S+p*(.3+T*.19),b+.18-T*.08,d+(T-1)*.2),v.rotation.set(-.4,T*.9,p*(.4-T*.25)),v.castShadow=!0,M.add(v)}}}function x(M){M.updateMatrixWorld(!0);let S=M.matrixWorld.clone().invert(),d=new Map,h=[];M.traverse(u=>{if(u instanceof st){let y=u.geometry.clone().applyMatrix4(new mt().multiplyMatrices(S,u.matrixWorld)),b=y.index?y.toNonIndexed():y;b!==y&&y.dispose();let p=u.material;d.has(p)||d.set(p,[]),d.get(p).push(b),h.push(u)}});for(let u of h)u.removeFromParent(),u.geometry.dispose();for(let[u,y]of d){let b=Yp(y);if(y.forEach(p=>p.dispose()),b){let p=new st(b,u);p.castShadow=!0,p.receiveShadow=!0,M.add(p)}}}function g(M,S,d,h=1){let u=new lt;u.position.set(S,0,d),M.add(u),n(1.6*h,.32,1.4*h,"#8d9689",u,0,.02,0),s([new O(0,0,0),new O(.28*h,.9*h,.1*h),new O(-.06*h,1.9*h,0),new O(.16*h,2.6*h,-.05*h)],.22*h,"#655540",u);let y=[];for(let b=0;b<5;b++){let p=b*1.257+S,T=(1+b%2*.45)*h,v=new O(Math.cos(p)*T,(3.1+b%3*.25)*h,Math.sin(p)*T);s([new O(.12*h,2.4*h,0),new O(v.x*.5,v.y*.97,v.z*.5),v],.08*h,"#655540",u),y.push(v)}for(let b of y)for(let p=0;p<3;p++){let T=new st(new Kt(1.3*h,.9*h),t?.leaves);T.position.set(b.x+Math.cos(p*2.1)*.3*h,b.y+.15*h,b.z+Math.sin(p*2.1)*.3*h),T.rotation.set(p*.7,p*2.1,.3),T.castShadow=!0,u.add(T)}{let b=[],p=[],T=[];for(let f=0;f<34;f++){let _=f*2.399+S,A=(.3+f%5*.22)*h,w=(3.05+f%3*.18)*h,L=(2.1+f*7%5*.22)*h,U=(.75+f%3*.15)*h,N=b.length/3;for(let F=0;F<=10;F++){let j=F/10,W,ee;if(j<.25){let ge=j/.25;W=A+.85*h*ge,ee=w+.3*h*Math.sin(ge*Math.PI)}else{let ge=(j-.25)/.75;W=A+.85*h+.3*h*ge,ee=w-L*Math.pow(ge,1.25)}let q=Math.cos(_)*W,$=Math.sin(_)*W,k=-Math.sin(_)*U/2,Te=Math.cos(_)*U/2;b.push(q-k,ee,$-Te,q+k,ee,$+Te),p.push(0,1-j,1,1-j),F<10&&T.push(N+F*2,N+F*2+1,N+F*2+2,N+F*2+1,N+F*2+3,N+F*2+2)}}let v=new gt;v.setAttribute("position",new Ye(b,3)),v.setAttribute("uv",new Ye(p,2)),v.setIndex(T),v.computeVertexNormals();let R=new st(v,t?.willow);R.castShadow=!0,R.receiveShadow=!0,u.add(R)}x(u)}return{mesh:a,box:n,roof:o,hall:l,tree:c,bamboo:m,batch:x,willow:g}}var Fn=["\u6F47\u6E58\u7AF9\u5F84","\u6021\u7EA2\u82B1\u5F71","\u6C81\u82B3\u6C34\u69AD","\u7A3B\u9999\u7530\u56ED","\u8605\u829C\u53E0\u77F3","\u680A\u7FE0\u677E\u9662","\u85D5\u9999\u83B2\u5CB8","\u79CB\u723D\u957F\u5ECA","\u7F00\u9526\u82B1\u5F84","\u7D2B\u83F1\u6D32\u7554","\u51F8\u78A7\u5C71\u5E84","\u5929\u9999\u697C","\u51F9\u6676\u6EAA\u9986"],jo=e=>e<18?"\u5927\u89C2\u56ED\u95E8\u5185":Fn[Math.floor((e-18)/36)%Fn.length];function Zp(){let e={value:0},t=new WeakSet;function i(s){t.has(s)||(t.add(s),s.onBeforeCompile=o=>{o.uniforms.runDistance=e,o.uniforms.gardenTime=Go,o.uniforms.bz0=pr[0],o.uniforms.bz1=pr[1],o.uniforms.bz2=pr[2],o.uniforms.bz3=pr[3],o.vertexShader=`uniform float runDistance;uniform float gardenTime;uniform float bz0;uniform float bz1;uniform float bz2;uniform float bz3;
 float archOne(float z,float c){float d=(z-c)/15.0;if(abs(d)>=1.0)return 0.0;float k=cos(1.5707963*d);return 1.6*k*k;}
 float archLift(vec3 w){return (archOne(w.z,bz0)+archOne(w.z,bz1)+archOne(w.z,bz2)+archOne(w.z,bz3))*(1.0-smoothstep(4.95,5.05,abs(w.x)))*smoothstep(-0.32,-0.14,w.y);}
 float route(float s){return 15.0*sin(s/37.0)+11.0*sin(s/79.0);}
 float routeSlope(float s){return 15.0/37.0*cos(s/37.0)+11.0/79.0*cos(s/79.0);}
 float gardenBend(float z){float ahead=4.0-z;return route(runDistance+ahead)-route(runDistance)-routeSlope(runDistance)*ahead;}
 `+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <project_vertex>",`vec4 bentWorld=modelMatrix*vec4(transformed,1.0);
#ifndef NO_ARCH
bentWorld.y+=archLift(bentWorld.xyz);
#endif
bentWorld.x+=gardenBend(bentWorld.z);
#ifdef GARDEN_WIND
float gwPh=dot(bentWorld.xz,vec2(0.37,0.23));float gwH=max(transformed.y,0.0);bentWorld.x+=sin(gardenTime*1.7+gwPh)*0.045*gwH;bentWorld.z+=cos(gardenTime*1.2+gwPh*1.3)*0.025*gwH;
#endif
vec4 mvPosition=viewMatrix*bentWorld;gl_Position=projectionMatrix*mvPosition;`),o.vertexShader=o.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
   #if defined(USE_ENVMAP) || defined(DISTANCE) || defined(USE_SHADOWMAP) || defined(USE_TRANSMISSION) || NUM_SPOT_LIGHT_COORDS > 0
    #ifndef NO_ARCH
    worldPosition.y+=archLift(worldPosition.xyz);
    #endif
    worldPosition.x+=gardenBend(worldPosition.z);
   #endif`)},s.customProgramCacheKey=()=>"garden-curve-v2")}let r=new Map,a=new bn({depthPacking:hs});i(a);function n(s){s.traverse(o=>{if(o instanceof st){for(let c of Array.isArray(o.material)?o.material:[o.material])i(c);let l=Array.isArray(o.material)?o.material[0]:o.material;if(l.alphaTest&&l.map){if(!r.has(l)){let c=new bn({depthPacking:hs,map:l.map,alphaTest:l.alphaTest,side:2});i(c),r.set(l,c)}o.customDepthMaterial=r.get(l)}else o.customDepthMaterial=a;o.frustumCulled=!1}})}return{distance:e,apply:n,dispose:()=>{a.dispose(),r.forEach(s=>s.dispose())}}}function Jp(e){let t=qp(),i=[],r=[];function a(d,h,u,y,b){let p=document.createElement("canvas");p.width=512,p.height=128;let T=p.getContext("2d");T.fillStyle="#263f35",T.fillRect(0,0,512,128),T.strokeStyle="#c5a45b",T.lineWidth=7,T.strokeRect(8,8,496,112),T.font="72px KaiTi, serif",T.fillStyle="#f5d99b",T.textAlign="center",T.fillText(h,256,90);let v=new Xt(p);v.colorSpace=ft,r.push(v);let R=new st(new Kt(3,.75),new Pr({map:v}));R.position.set(u,y,b),d.add(R)}let n=new lt;n.name="DaguanyuanEntrance",e.add(n);let s=Xo(n,t),o=[],l=s.box(450,.25,80,"#b9bcb6",n,0,-.105,30),c=l.geometry.getAttribute("position"),m=l.geometry.getAttribute("uv");for(let d=0;d<c.count;d++)m.setXY(d,c.getX(d)/4,(c.getZ(d)+35)/4);for(let d=-9;d<=70;d+=3)s.box(450,.008,.025,"#969d96",n,0,.024,d);for(let d=-90;d<=90;d+=3)s.box(.025,.008,80,"#969d96",n,d,.024,30);let x=(()=>{let d=document.createElement("canvas");d.width=1024,d.height=128;let h=d.getContext("2d");h.fillStyle="#22506b",h.fillRect(0,0,1024,128);let u=(b,p,T,v)=>{h.fillStyle=v,h.fillRect(b,p,T,128-p*2)};for(let b of[0,984])u(b,0,40,"#2f6b4f"),u(b+8,0,6,"#f1ead6"),u(b+26,0,6,"#f1ead6");for(let b of[40,724]){u(b,6,260,"#2f6b4f");for(let p of[b+70,b+190]){for(let[T,v]of[[44,"#1f4a6e"],[34,"#f1ead6"],[28,"#3b7fa0"],[18,"#f1ead6"],[13,"#1f4a6e"]])h.fillStyle=v,h.beginPath(),h.arc(p,64,T,0,Math.PI*2),h.fill();h.strokeStyle="#f1ead6",h.lineWidth=3;for(let T=0;T<12;T++){let v=T*Math.PI/6;h.beginPath(),h.moveTo(p+Math.cos(v)*18,64+Math.sin(v)*18),h.lineTo(p+Math.cos(v)*44,64+Math.sin(v)*44),h.stroke()}h.fillStyle="#d9b25a",h.beginPath(),h.arc(p,64,6,0,Math.PI*2),h.fill()}}h.fillStyle="#1d4766",h.beginPath(),h.moveTo(300,64),h.lineTo(340,14),h.lineTo(684,14),h.lineTo(724,64),h.lineTo(684,114),h.lineTo(340,114),h.closePath(),h.fill(),h.strokeStyle="#d9b25a",h.lineWidth=5,h.stroke(),h.strokeStyle="#f1ead6",h.lineWidth=2,h.beginPath(),h.moveTo(318,64),h.lineTo(350,24),h.lineTo(674,24),h.lineTo(706,64),h.lineTo(674,104),h.lineTo(350,104),h.closePath(),h.stroke(),h.fillStyle="#d9b25a",h.fillRect(0,0,1024,5),h.fillRect(0,123,1024,5);let y=new Xt(d);return y.colorSpace=ft,y.anisotropy=4,r.push(y),new $t({map:y,roughness:.55})})(),g=(d,h,u,y,b,p,T=x)=>{let v=new st(new Pt(d,h,u),T);return v.position.set(y,b,p),v.castShadow=!0,v.receiveShadow=!0,n.add(v),v},M=(()=>{let d=new Ur;return d.moveTo(0,0),d.lineTo(1.25,0),d.quadraticCurveTo(1.05,-.08,.9,-.16),d.bezierCurveTo(.6,-.22,.4,-.62,.14,-.62),d.lineTo(0,-.62),d.closePath(),new ya(d,{depth:.16,bevelEnabled:!1,curveSegments:10})})(),S=(()=>{let d=new Ur;return d.moveTo(-.42,0),d.lineTo(.42,0),d.lineTo(.42,.32),d.bezierCurveTo(.5,.72,.3,1,.05,1.04),d.bezierCurveTo(-.16,1.07,-.22,.88,-.06,.8),d.bezierCurveTo(.1,.72,.04,.54,-.16,.5),d.lineTo(-.42,.44),d.closePath(),new ya(d,{depth:.24,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2,curveSegments:10})})();for(let d of[-1,1]){let h=s.box(220,4.8,1.2,"#f4f3ed",n,d*117.7,2.4,0),u=h.geometry.getAttribute("position"),y=h.geometry.getAttribute("uv");for(let A=0;A<u.count;A++)y.setXY(A,u.getX(A)/3,u.getY(A)/3);s.box(220.2,.16,1.6,"#344e46",n,d*117.7,4.85,0),s.box(220,.4,1.3,"#9b9e93",n,d*117.7,.2,0);for(let A=10.8;A<225;A+=7.2){let w=d*A;s.box(4.9,3.05,.07,"#babdbf",n,w,2.6,.635),s.box(4.68,2.83,.08,"#f4f3ed",n,w,2.6,.68);for(let U of[1.24,3.96])s.box(4.56,.035,.045,"#999da0",n,w,U,.735);for(let U of[-2.26,2.26])s.box(.035,2.72,.045,"#999da0",n,w+U,2.6,.735);s.mesh(new Lt(1.08,.035,6,64),"#999da0",n,w,2.6,.75);let L=new ri([new O(w-.64,1.78,.78),new O(w-.28,2.34,.78),new O(w+.12,2.72,.78),new O(w+.58,3.35,.78)]);s.mesh(new Ei(L,16,.035,5,!1),"#999da0",n,0,0,0);for(let U=0;U<5;U++){let N=w-.4+U*.23,F=2.13+U*.24,j=U%2?.43:-.42,W=new ri([new O(N,F,.78),new O(N+j*.5,F+.18,.78),new O(N+j,F+.23,.78)]);s.mesh(new Ei(W,6,.019,4,!1),"#999da0",n,0,0,0);for(let ee=0;ee<5;ee++){let q=ee*Math.PI*2/5,$=s.mesh(new Mt(.075,7,5),"#babdbf",n,N+j+Math.cos(q)*.087,F+.23+Math.sin(q)*.087,.8);$.scale.z=.35}s.mesh(new Mt(.038,6,4),"#999da0",n,N+j,F+.23,.83)}}for(let A=8.7;A<225;A+=.85){let w=d*A;for(let L of[4.29,4.61])s.box(.72,.035,.04,"#999da0",n,w,L,.63);s.box(.035,.32,.04,"#999da0",n,w-.34,4.45,.63),s.box(.035,.19,.04,"#999da0",n,w+.34,4.52,.63),s.box(.4,.035,.04,"#999da0",n,w+.15,4.43,.63)}for(let A of[3.75,7.4])for(let w of[-1.8,1.8])s.mesh(new at(.24,.27,6.45,18),"#a52b24",n,d*A,3.625,w),s.mesh(new at(.36,.42,.24,18),"#babdbf",n,d*A,.52,w);s.box(3.4,1.15,.5,"#9b9e93",n,d*5.575,.975,0),s.box(3.4,5.3,.42,"#e4deca",n,d*5.575,4.2,0),s.box(3.4,.08,.5,"#babdbf",n,d*5.575,1.58,0);for(let A of[-1,1])s.box(2.5,.07,.06,"#999da0",n,d*5.575,4.2+A*1.9,.23*A*A),s.box(.07,3.8,.06,"#999da0",n,d*5.575+A*1.25,4.2,.23);s.mesh(new Lt(.42,.05,8,32),"#999da0",n,d*5.575,4.2,.24),s.mesh(new Lt(.22,.035,8,24),"#999da0",n,d*5.575,4.2,.24);for(let A=0;A<8;A++){let w=A*Math.PI/4;s.mesh(new Mt(.07,8,6),"#999da0",n,d*5.575+Math.cos(w)*.32,4.2+Math.sin(w)*.32,.25).scale.z=.5}for(let[A,w]of[[3.75,-1],[3.75,1],[7.4,-1]])for(let L of[-1.8,1.8]){let U=s.mesh(M.clone(),"#2f6b5a",n,d*A+d*w*.24,6.85,L-.08);U.scale.x=d*w}s.box(.42,.62,.9,"#babdbf",n,d*3.3,.71,.8),s.mesh(new at(.46,.46,.3,28),"#babdbf",n,d*3.3,1.48,.8).rotation.z=Math.PI/2,s.mesh(new Lt(.3,.035,8,28),"#999da0",n,d*3.14,1.48,.8).rotation.y=Math.PI/2,s.mesh(new Mt(.16,12,10),"#babdbf",n,d*3.3,1.98,.8),s.box(.2,5.6,.32,"#a52b24",n,d*3.6,3.52,0);let b=new lt;b.position.set(d*3.5,0,.05),b.userData.side=d,n.add(b),s.box(3.5,4.88,.16,"#a52b24",b,-d*1.75,3.16,0),s.box(.12,4.88,.2,"#8f2a22",b,-d*.06,3.16,0),s.box(.12,4.88,.2,"#8f2a22",b,-d*3.44,3.16,0);for(let A=0;A<7;A++)for(let w=0;w<7;w++)s.mesh(new Mt(.075,10,8),"#d8aa51",b,-d*(.4+w*.45),1.25+A*.62,.09).scale.z=.7;s.mesh(new at(.26,.26,.05,24),"#b8995c",b,-d*3.05,3.05,.11).rotation.x=Math.PI/2,s.mesh(new at(.16,.16,.06,18),"#d8aa51",b,-d*3.05,3.05,.14).rotation.x=Math.PI/2,s.mesh(new Lt(.17,.028,8,24),"#d8aa51",b,-d*3.05,2.82,.17),s.batch(b),o.push(b);{let A=d*5.575;s.mesh(new at(.012,.012,.45,4),"#5a3a24",n,A,6.62,1.8),s.mesh(new Mt(.42,18,14),"#c74e32",n,A,5.92,1.8).scale.y=1.2,s.mesh(new at(.22,.24,.1,18),"#d8aa51",n,A,6.4,1.8),s.mesh(new at(.24,.22,.1,18),"#d8aa51",n,A,5.44,1.8);for(let w=0;w<7;w++)s.mesh(new at(.012,.02,.42,4),"#c23a2f",n,A+(w-3)*.03,5.15,1.8)}let p=new lt;p.position.set(d*6.4,0,3.7),n.add(p);let T="#999da0",v="#6d7377",R=(A,w,L,U,N,F,j=T)=>{let W=s.mesh(new Mt(1,24,16),j,p,A,w,L);return W.scale.set(U,N,F),W},f=(A,w,L,U)=>s.mesh(new Lt(U,.027,6,14),T,p,A,w,L);s.box(1.5,.22,1.8,T,p,0,.11,0),s.box(1.3,.3,1.6,T,p,0,.36,0),s.box(1.48,.12,1.78,T,p,0,.57,0);for(let A of[-.52,-.26,0,.26,.52])s.box(.035,.19,.025,v,p,A,.36,.806);R(0,1.08,-.15,.46,.57,.42),R(0,1.36,.14,.36,.49,.32);for(let A of[-1,1]){R(A*.36,.84,-.05,.24,.26,.34),R(A*.23,.94,.37,.12,.38,.14),R(A*.23,.68,.51,.19,.105,.26);for(let w=-1;w<=1;w++)R(A*.23+w*.095,.685,.72,.044,.065,.078)}R(0,1.85,.13,.46,.45,.37);for(let A=0;A<13;A++){let w=A/13*Math.PI*2,L=Math.cos(w)*.39,U=1.85+Math.sin(w)*.39;R(L,U,.24,.11,.12,.1),f(L,U,.335,.062)}for(let A of[-1,1])R(A*.3,2.16,.14,.15,.17,.075),R(A*.3,2.16,.202,.075,.095,.015,v),R(A*.18,1.97,.435,.12,.05,.055),R(A*.17,1.905,.435,.069,.043,.018,v),R(A*.17,1.91,.451,.034,.028,.011),R(A*.145,1.76,.47,.16,.125,.12);R(0,1.8,.573,.105,.064,.038,v),R(0,1.62,.448,.225,.079,.07,v),R(0,1.56,.447,.23,.065,.09);for(let A of[-.14,.14])s.mesh(new ga(.025,.087,8),"#babdbf",p,A,1.648,.505).rotation.z=Math.PI;f(0,1.34,.455,.12),R(d*.43,.77,.58,.18,.18,.18),f(d*.43,.78,.745,.1);let _=new ri([new O(.3,.85,-.41),new O(.48,1.1,-.4),new O(.39,1.35,-.38)]);s.mesh(new Ei(_,16,.055,8,!1),T,p),R(.39,1.35,-.38,.095,.11,.095)}s.box(16.6,.4,5.8,"#999da0",n,0,.2,0),s.box(16.7,.07,.42,"#babdbf",n,0,.42,2.7),s.box(16.7,.07,.42,"#babdbf",n,0,.42,-2.7);for(let d of[-1,1])s.box(8.4,.27,.5,"#babdbf",n,0,.135,d*3.15),s.box(8.4,.135,.5,"#babdbf",n,0,.0675,d*3.65),s.box(.4,.34,1,"#999da0",n,-4.4,.17,d*3.4),s.box(.4,.34,1,"#999da0",n,4.4,.17,d*3.4);s.box(7,.32,.3,"#704638",n,0,.56,.05),s.box(7.5,.28,.3,"#a52b24",n,0,5.74,.05),s.box(7,1.07,.1,"#a52b24",n,0,6.415,0),s.box(7.5,.15,.3,"#a52b24",n,0,7.02,.05);for(let d of[-2.1,-.7,.7,2.1])s.mesh(new at(.17,.17,.36,6),"#2e6676",n,d,5.74,.36).rotation.x=Math.PI/2,s.mesh(new at(.12,.12,.04,6),"#d8aa51",n,d,5.74,.55).rotation.x=Math.PI/2;for(let d of[-1.8,1.8]){for(let[h,u]of[[-5.575,3.3],[0,7.15],[5.575,3.3]])g(u,.42,.34,h,7.06,d);s.box(16,.1,.42,"#2e6676",n,0,7.32,d);for(let h of[-7.4,-6.17,-4.93,-3.75,-2.5,-1.25,0,1.25,2.5,3.75,4.93,6.17,7.4]){let u=Math.sign(d),y=Math.abs(h)%3.7<.1||Math.abs(h)>7?"#2e6676":"#3a7a5a";s.box(.32,.16,.32,y,n,h,7.45,d),s.box(.95,.11,.16,y,n,h,7.58,d),s.box(.16,.11,.8,y,n,h,7.58,d+u*.2),s.box(1.25,.11,.16,y,n,h,7.74,d+u*.18),s.box(.15,.13,1.1,"#2e6676",n,h,7.8,d+u*.38);for(let b of[-.42,.42])s.box(.15,.09,.18,"#d8aa51",n,h+b,7.67,d)}for(let h=0;h<12;h++){let u=-6.79+h*1.234;Math.abs(Math.abs(u)-3.75)>.35&&s.box(.85,.3,.04,"#a52b24",n,u,7.6,d)}s.mesh(new at(.13,.13,17.2,12),"#704638",n,0,7.95,d*1.28).rotation.z=Math.PI/2}for(let d of[-7.4,7.4])g(.34,.42,3.6,d,7.06,0);s.roof(n,16.4,4.6,7.98,"#3e584b"),s.box(14.6,.98,3.3,"#a52b24",n,0,8.72,0),s.box(14.8,.09,3.5,"#2e6676",n,0,9.26,0);for(let d of[-1,1]){g(14.6,.3,.12,0,9.06,d*1.71);for(let h of[-4.2,0,4.2]){s.box(2.2,.62,.06,"#49665c",n,h,8.6,d*1.66);for(let u=-3;u<=3;u++)s.box(.035,.62,.08,"#a52b24",n,h+u*.3,8.6,d*1.68);for(let u=-1;u<=1;u++)s.box(2.2,.035,.08,"#a52b24",n,h,8.6+u*.2,d*1.68)}for(let h=-6.6;h<=6.61;h+=1.1){let u=Math.round(h/1.1)%2?"#3a7a5a":"#2e6676";s.box(.24,.11,.24,u,n,h,9.36,d*1.66),s.box(.72,.08,.13,u,n,h,9.45,d*1.66),s.box(.12,.09,.62,"#2e6676",n,h,9.5,d*1.86),s.box(.12,.07,.14,"#d8aa51",n,h,9.42,d*1.75)}}s.roof(n,15.6,4,9.56,"#3e584b");for(let d of[-1,1])s.mesh(S.clone(),"#3e4744",n,d*6.82,11.06,-.12).scale.set(-d*.88,.88,.88);for(let d of o)d.removeFromParent();s.batch(n),o.forEach(d=>n.add(d)),(()=>{let d=document.createElement("canvas");d.width=768,d.height=256;let h=d.getContext("2d"),u=h.createLinearGradient(0,0,0,256);u.addColorStop(0,"#25201c"),u.addColorStop(1,"#0f0d0b"),h.fillStyle=u,h.fillRect(0,0,768,256),h.strokeStyle="#c9a24c",h.lineWidth=10,h.strokeRect(14,14,740,228),h.lineWidth=3,h.strokeRect(32,32,704,192);for(let[R,f]of[[32,32],[736,32],[32,224],[736,224]])h.fillStyle="#c9a24c",h.beginPath(),h.arc(R,f,9,0,Math.PI*2),h.fill();h.font="bold 150px KaiTi, STKaiti, serif",h.textAlign="center",h.textBaseline="middle",h.fillStyle="rgba(0,0,0,.65)",h.fillText("\u5927\u89C2\u56ED",388,138);let y=h.createLinearGradient(0,60,0,200);y.addColorStop(0,"#fbe7a6"),y.addColorStop(.5,"#d9a944"),y.addColorStop(1,"#9a6a22"),h.fillStyle=y,h.fillText("\u5927\u89C2\u56ED",384,132);let b=new Xt(d);b.colorSpace=ft,b.anisotropy=4,r.push(b);let p=new $t({map:b,roughness:.3,metalness:.1}),T=new st(new Kt(2.7,.9),p);T.position.set(0,6.42,.2);let v=new st(new Pt(2.95,1.12,.14),new $t({color:"#3b2a1c",roughness:.5}));v.position.set(0,6.42,.1),v.castShadow=!0,n.add(v,T)})();for(let d=0;d<Fn.length;d++){let h=d<6?d:[2,5,1,2,4,5,2][d-6],u=new lt;i.push(u),e.add(u);let y=Xo(u,t),b=(p,T,v,R,f,_,A)=>{let w=new Pt(p,T,v,1,1,Math.ceil(v/1.5));if(["#668852","#778f5e"].includes(R)){let L=w.getAttribute("position"),U=w.getAttribute("uv");for(let N=0;N<L.count;N++)U.setXY(N,(L.getX(N)+f)/2,(L.getZ(N)+A)/2)}return y.mesh(w,R,u,f,_,A)};{let p=new Kt(95,36,64,24);p.rotateX(-Math.PI/2);let T=p.getAttribute("position"),v=p.getAttribute("uv"),R=[];for(let A=0;A<T.count;A++){let w=T.getX(A),L=T.getZ(A);v.setXY(A,w/2.5,L/2.5);let U=.5+.5*Math.sin(w*.21+d*3.1)*Math.sin(L*.17+d),N=.5+.5*Math.sin(w*.07+L*.11+d*1.7),F=Math.abs(w)<6?0:1;R.push(.82+F*(.3*N-.1*U),.9+F*(.12*N-.12*U),.8+F*(-.12*N-.06*U))}p.setAttribute("color",new Ye(R,3));let f=new $t({color:"#6f9156",roughness:.95});t?.apply(f,"#668852"),f.vertexColors=!0;let _=new st(p,f);_.position.set(0,-.224,0),_.receiveShadow=!0,u.add(_)}for(let p of[-1,1])for(let T=0;T<3;T++){let v=[],R=[],f=[],_=d*7919+T*131+(p+2)*17,A=()=>(_=Math.imul(_,1664525)+1013904223>>>0,_/4294967296);for(let L=0;L<360;L++){let U=6.6+A()*34,N=-17.8+A()*35.6;if(h===2?U<27.2:U>6.2&&U<22.4&&N>-13.8&&N<1.8)continue;U*=p;let F=.22+A()*.4,j=.03+A()*.03,W=A()*6.28;for(let ee=0;ee<3;ee++){let q=W+ee*2.1,$=.05+A()*.12,k=v.length/3;for(let Te=0;Te<=2;Te++){let ge=Te/2,Ke=j*(1-ge)+.002;for(let He of[-1,1])v.push(U+Math.cos(q)*Ke*He+Math.sin(q)*$*ge*ge,-.22+F*ge,N+Math.sin(q)*Ke*He+Math.cos(q)*$*ge*ge),R.push(He<0?0:1,ge)}for(let Te=0;Te<2;Te++){let ge=k+Te*2;f.push(ge,ge+1,ge+2,ge+1,ge+3,ge+2)}}}let w=new gt;w.setAttribute("position",new Ye(v,3)),w.setAttribute("uv",new Ye(R,2)),w.setIndex(f),w.computeVertexNormals(),y.mesh(w,["#688544","#8ca65a","#4b713b"][T],u)}for(let p of[-1,1]){let T=d*31+(p+2)*7;const v=()=>(T=Math.imul(T,1664525)+1013904223>>>0,T/4294967296);for(let R=0;R<70;R++){let f=7+v()*32,_=-17+v()*34;(h===2?f<27.2:f>6.2&&f<22.4&&_>-13.8&&_<1.8)||(y.mesh(new Mt(.05,6,4),["#e8d36a","#f2efe4","#e9a0b4","#c9a0d8"][f%4|0],u,p*f,-.06+v()*.08,_).scale.y=.6)}}b(95,.3,36,"#668852",0,-.38,0),b(8.2,.13,36,"#b7b6a5",0,-.06,0);for(let p=-17;p<=17;p+=2)for(let T=-3;T<=3;T++){let v=y.box(1.11,.015,1.83,(p+T)%3==0?"#c5c3b0":"#bdbba7",u,T*1.16,.015,p);v.castShadow=!1}for(let p of d===11?[]:[-1,1]){if(b(.24,.2,36,"#8e9988",p*4.3,.04,0),h===2){{let R=new Ur,f=A=>{let w=Math.cos(1.5707963*(A/15));return Math.abs(A)<15?1.6*w*w:0};R.moveTo(-17.6,-.7);for(let A=-17.6;A<=17.61;A+=.4)R.lineTo(A,f(A)+.02);R.lineTo(17.6,-.7),R.closePath();for(let[A,w]of[[-9,.85],[0,1.45],[9,.85]]){let L=new _a;L.moveTo(A-w,-.55),L.absarc(A,-.55,w,Math.PI,0,!0),L.lineTo(A-w,-.55),R.holes.push(L)}let _=y.mesh(new ya(R,{depth:.26,bevelEnabled:!1,curveSegments:18}),"#c4c1b2",u,p*4.88,0,0);_.rotation.y=-p*Math.PI/2;for(let[A,w]of[[-9,.85],[0,1.45],[9,.85]]){let L=[];for(let U=0;U<=16;U++){let N=Math.PI-U/16*Math.PI;L.push(new O(0,-.55+Math.sin(N)*(w+.06),A+Math.cos(N)*(w+.06)))}y.mesh(new Ei(new ri(L),24,.07,6,!1),"#a8a596",u,p*4.93,0,0)}}let v=b(21.44,.08,36,"#548f8c",p*15.78,-.12,0);v.material.roughness=.14,v.material.metalness=.25,v.material.normalMap=Vi(),v.material.normalScale.set(.45,.45),v.material.color.set("#467f80");for(let R=0;R<14;R++){let f=y.box(1.1+R%3*.4,.012,.025,"#80b4ab",u,p*(7+R%5*2.2),-.067,-16+R*2.4);f.castShadow=!1}for(let R=-16;R<=16;R+=3)y.box(.2,1.1,.2,"#d2d0bc",u,p*4.6,.53,R),y.box(.17,.13,3,"#bec3ad",u,p*4.6,.96,R+1.5);for(let R=0;R<12;R++){let f=p*(7+R%4*1.5),_=-14+R*2.5;if(y.mesh(new at(.42,.42,.04,12),"#5e956c",u,f,.02,_),R%3==0){y.mesh(new at(.012,.012,.5,4),"#6f8f4c",u,f+.2,.25,_),y.mesh(new Mt(.05,8,6),"#e7c35a",u,f+.2,.55,_);for(let A=0;A<8;A++){let w=A*Math.PI/4,L=y.mesh(new Mt(1,10,8),A%2?"#e9a9b8":"#f3c9d2",u,f+.2+Math.cos(w)*.07,.6,_+Math.sin(w)*.07);L.scale.set(.045,.12,.025),L.rotation.set(Math.sin(w)*.55,0,-Math.cos(w)*.55)}}}for(let R of[-11,8])y.willow(u,p*5.6,R+d%3,.95)}else{b(2,.06,36,"#778f5e",p*5.5,-.02,0);for(let v=0;v<3;v++){let R=[],f=[],_=[],A=d*137+v*977+(p+2)*59,w=()=>(A=Math.imul(A,1664525)+1013904223>>>0,A/4294967296);for(let U=0;U<360;U++){let N=p*(4.55+w()*1.85),F=-17.95+w()*(d===0?27.4:35.9),j=.15+w()*.26,W=.018+w()*.035,ee=w()*Math.PI*2,q=.04+w()*.12,$=R.length/3;for(let k=0;k<=3;k++){let Te=k/3,ge=W*(1-Te)+.001;for(let Ke of[-1,1])R.push(N+Math.cos(ee)*ge*Ke+Math.sin(ee)*q*Te*Te,.012+j*Te,F+Math.sin(ee)*ge*Ke+Math.cos(ee)*q*Te*Te),f.push(Ke===-1?0:1,Te)}for(let k=0;k<3;k++){let Te=$+k*2;_.push(Te,Te+1,Te+2,Te+1,Te+3,Te+2)}}let L=new gt;L.setAttribute("position",new Ye(R,3)),L.setAttribute("uv",new Ye(f,2)),L.setIndex(_),L.computeVertexNormals(),y.mesh(L,["#688544","#8ca65a","#4b713b"][v],u)}for(let v=0;v<6;v++){let R=-15+v*4.4;b(.3,.95,3.5,"#e1dbca",p*7.3,.68,R),b(.36,.4,3.5,"#9b9e93",p*7.3,.2,R),b(.5,.12,3.65,"#4a6053",p*7.3,1.22,R);for(let _ of[-1.75,1.75])y.box(.5,1.45,.4,"#9b9e93",u,p*7.3,.68,R+_),y.box(.62,.12,.55,"#4a6053",u,p*7.3,1.46,R+_);let f=p*7.12;y.box(.035,.5,.85,"#49665c",u,f,.85,R);for(let _=-2;_<=2;_++)y.box(.06,.52,.025,"#a4a397",u,f-p*.025,.85,R+_*.17),y.box(.06,.025,.86,"#a4a397",u,f-p*.025,.85+_*.1,R)}}let T=new lt;T.position.set(p*(h===2?13.5:14.2),0,-6),T.rotation.y=(p===1?-Math.PI/2:Math.PI/2)+(d>=6?p*.22:0),u.add(T),y.box(14,.25,15,"#a8af98",T,0,.03,1);for(let v=-5;v<=7;v++)y.box(13,.015,.025,"#929d8c",T,0,.165,v);for(let v=-6;v<=6;v++)y.box(.025,.015,13,"#929d8c",T,v,.165,1);if(y.hall(T,h===1?9:8,5,0,-2,h===3?"#84704e":"#344e46",h!==3,h===2),h!==2&&h!==3){for(let _ of[-1,1])y.hall(T,3,5,_*5.2,3,"#425c50",_===p),y.box(.25,1.75,15,"#dfd9c8",T,_*7,.98,1),y.box(.4,.12,15,"#4d6054",T,_*7,1.9,1);let v=new Ur;v.moveTo(-1.5,0),v.lineTo(1.5,0),v.lineTo(1.5,2.65),v.lineTo(-1.5,2.65),v.closePath();let R=new _a;R.absarc(0,1.13,.98,0,Math.PI*2,!0),v.holes.push(R),y.mesh(new ya(v,{depth:.24,bevelEnabled:!1,curveSegments:24}),"#ddd6c4",T,0,.12,8.2),y.mesh(new Lt(1.02,.075,8,32),"#9da491",T,0,1.25,8.46);let f=new lt;f.position.z=8.3,T.add(f),y.roof(f,3.1,.7,2.8,"#4a6053");for(let _ of[-1,1]){let A=new lt;A.position.set(_*4.1,0,7),T.add(A),y.roof(A,4.8,1.6,2.35,"#40584d"),y.box(5,.2,2,"#a8ae9a",A,0,.25,0);for(let w of[-2.2,0,2.2])for(let L of[-.65,.65])y.mesh(new at(.085,.105,2.2,8),"#775141",A,w,1.35,L);y.box(4.8,.12,.13,"#775141",A,0,2.3,.65)}y.box(14,1.8,.25,"#dfd9c8",T,0,1,-6.5),y.box(14,.12,.4,"#4d6054",T,0,1.96,-6.5);for(let _ of[-1,1])y.box(.65,.7,.65,"#9aab8b",T,_*2.1,.6,3.7),y.mesh(new Mt(.6,12,8),"#69895e",T,_*2.1,1.17,3.7)}if(h===0)for(let v=0;v<25;v++)y.bamboo(u,p*(5.2+v%4*.45),-16+Math.floor(v/4)*4,v);if(h===1)for(let v=0;v<5;v++)y.tree(p*(8.5+v%2*4),4+v*2,1.1+v%2*.25,!0);if(h===3){for(let v=0;v<7;v++){y.box(.8,.14,14,"#847452",u,p*(8+v),.07,10);for(let R=0;R<7;R++)y.mesh(new ga(.22,.6,5),"#759746",u,p*(8+v),.4,4+R*1.9)}for(let v=0;v<12;v++)y.box(.1,.85,.1,"#927f56",u,p*6.4,.4,-15+v*2.7);b(.1,.1,34,"#927f56",p*6.4,.65,0)}if(h===4)for(let v=0;v<12;v++){let R=new yn(.7+v%3*.3,2),f=R.getAttribute("position");for(let A=0;A<f.count;A++){let w=f.getX(A),L=f.getY(A),U=f.getZ(A),N=.88+.17*Math.sin(w*9+L*4+U*7);f.setXYZ(A,w*N,L*N,U*N)}R.computeVertexNormals();let _=y.mesh(R,"#8d9689",u,p*(5.6+v%3*.5),.65,-15+v*2.7);_.scale.set(.8,1.1+v%3*.27,.75),_.rotation.set(v%3*.12,v*1.7,.16*(v%2?1:-1))}if(h===5||h===2)for(let v=0;v<5;v++)y.tree(p*(11+v%2*3),5+v*2,1.25+v%2*.2,d===5&&v%2==0?"plum":!1);for(let v=0;v<(d===0?15:20);v++){let R=p*(5+v%3*.43),f=-17+v*1.8;for(let _=0;_<3;_++){let A=y.mesh(new ga(.075,.4+v%3*.12,4),"#53783c",u,R+(_-1)*.11,.2,f);A.rotation.z=(_-1)*.22}}for(let v=0;v<10;v++){let R=y.mesh(new mc(.3+v%3*.1,0),"#899780",u,p*(5+v%3*.35),.18,-15+v*3.2);R.scale.y=.55}for(let v of[-15,2]){let R=p*4.02;y.box(.14,3.7,.14,"#6d4634",u,p*4.75,1.85,v),y.box(.9,.13,.13,"#6d4634",u,p*4.4,3.6,v);let f=y.mesh(new Mt(.36,24,16),"#c74e32",u,R,3.04,v);f.scale.y=1.2,y.mesh(new at(.025,.025,.18,8),"#704638",u,R,3.5,v);for(let _ of[2.61,3.47])y.mesh(new at(.17,.17,.08,16),"#d8aa51",u,R,_,v);for(let _=0;_<12;_++){let A=_*Math.PI/6,w=[];for(let L=0;L<=12;L++){let U=.15+(Math.PI-.3)*L/12;w.push(new O(R+Math.sin(U)*.367*Math.cos(A),3.04+Math.cos(U)*.439,v+Math.sin(U)*.367*Math.sin(A)))}y.mesh(new Ei(new ri(w),12,.012,4,!1),"#d8aa51",u)}y.mesh(new at(.02,.02,.16,6),"#d8aa51",u,R,2.5,v);for(let _=0;_<9;_++){let A=y.mesh(new at(.014,.022,.4,5),"#d8aa51",u,R+(_-4)*.026,2.24,v);A.rotation.z=(_-4)*.045}}for(let v=0;v<(d===0?2:3);v++)y.tree(p*(19+v*4),-9+v*12,2+v%2*.7,d===5?"plum":h===1)}if(d!==11){let p=new lt;p.position.z=-15,u.add(p);let T=h===3?"#84704e":"#3e584b";for(let v of[-6.7,-4.7,4.7,6.7]){let R=Math.abs(v)>5?5.5:7.8;y.mesh(new at(.18,.23,R,12),"#824333",p,v,R/2,0),y.box(.75,.5,.85,"#9b9e93",p,v,.25,0);for(let f=0;f<3;f++)y.box(.6+f*.22,.14,.5,"#704638",p,v,R-.65+f*.18,0),y.box(.22,.15,.9+f*.13,"#ad9563",p,v,R-.58+f*.18,0)}for(let v of[6.25,7.15])y.box(9.8,.25,.5,"#824333",p,0,v,0),y.box(9.6,.07,.53,"#ad9563",p,0,v-.08,0);for(let v of[-3.8,-2.8,-1.8,1.8,2.8,3.8]){y.box(.13,.65,.24,"#704638",p,v,6.7,0);let R=y.box(.32,.32,.12,"#ad9563",p,v,6.7,.18);R.rotation.z=Math.PI/4}y.roof(p,10,1.8,7.7,T);for(let v of[-1,1]){let R=new lt;R.position.x=v*5.8,p.add(R),y.box(2.1,.3,.5,"#824333",R,0,5.2,0),y.roof(R,2,1.5,5.55,T)}}if(d===11){let p=new lt;p.position.z=0,u.add(p);for(let v of[-5.2,5.2])for(let R of[-2,2]){y.mesh(new at(.25,.32,5.1,12),"#824333",p,v,2.55,R),y.box(.95,.5,.95,"#9b9e93",p,v,.25,R);for(let f=0;f<3;f++)y.box(.7+f*.3,.16,.9+f*.25,"#704638",p,v,4.5+f*.2,R)}y.box(11,.35,5,"#704638",p,0,5,0);let T=new lt;T.position.y=5.1,p.add(T),y.hall(T,9,3.6,0,0,"#344e46",!1,!1,!0);for(let v of[-1,1]){y.box(10.7,.14,.13,"#ad9563",p,0,6.05,v*2.35);for(let R=0;R<=20;R++)y.box(.07,.8,.07,"#704638",p,-5.2+R*.52,5.62,v*2.35);y.box(10.7,.12,.15,"#704638",p,0,5.3,v*2.35)}y.roof(p,10.6,4.5,5.05,"#3e584b");for(let v=0;v<2;v++){let R=new lt;R.position.y=8.75+v*3.65,p.add(R);let f=7.5-v*1.5,_=3.25-v*.35;y.hall(R,f,_,0,0,"#84704e",!1);for(let A of[-1,1]){y.box(f+.5,.12,.12,"#ad9563",R,0,1.05,A*(_/2+.45));for(let w=0;w<=14;w++)y.box(.06,.65,.06,"#824333",R,(w/14-.5)*(f+.4),.7,A*(_/2+.45))}}y.box(3.25,.88,.18,"#704638",p,0,6.7,1.95)}y.batch(u),d===11&&a(u,"\u5929\u9999\u697C",0,6.7,2.06),d!==11&&a(u,["\u6F47\u6E58\u9986","\u6021\u7EA2\u9662","\u6C81\u82B3\u6865","\u7A3B\u9999\u6751","\u8605\u829C\u82D1","\u680A\u7FE0\u5EB5","\u85D5\u9999\u69AD","\u79CB\u723D\u658B","\u7F00\u9526\u697C","\u7D2B\u83F1\u6D32","\u51F8\u78A7\u5C71\u5E84","\u5929\u9999\u697C","\u51F9\u6676\u6EAA\u9986"][d],0,6.75,-14.65)}return{tiles:i,entrance:n,entranceDoors:o,applySurface:t.apply,dispose:()=>{r.forEach(d=>d.dispose()),t.dispose()}}}function Kp(){let e=document.createElement("canvas");e.width=256,e.height=512;let t=e.getContext("2d");t.fillStyle="#19171d",t.fillRect(0,0,256,512);for(let r=0;r<220;r++){t.strokeStyle=r%4==0?"#42363a":r%3==0?"#302a32":"#24202a",t.lineWidth=r%4==0?.6:1,t.beginPath();for(let a=0;a<=512;a+=8){let n=r*1.19+Math.sin(a*.008+r*.6)*2;a===0?t.moveTo(n,a):t.lineTo(n,a)}t.stroke()}let i=new Xt(e);return i.colorSpace=ft,i.wrapS=i.wrapT=vr,i.anisotropy=4,i}function $p(){let e=document.createElement("canvas");e.width=e.height=512;let t=e.getContext("2d");t.fillStyle="#efebe5",t.fillRect(0,0,512,512),t.lineWidth=.5,t.strokeStyle="rgba(100,92,80,.14)";for(let r=0;r<512;r+=3)t.beginPath(),t.moveTo(r,0),t.lineTo(r,512),t.moveTo(0,r),t.lineTo(512,r),t.stroke();t.strokeStyle="rgba(255,250,235,.6)",t.lineWidth=1.3;for(let r=20;r<512;r+=64)for(let a=20;a<512;a+=64)t.beginPath(),t.ellipse(a,r,13,20,.7,0,Math.PI*2),t.ellipse(a+18,r+6,10,14,-.7,0,Math.PI*2),t.stroke();let i=new Xt(e);return i.colorSpace=ft,i.anisotropy=4,i}function Qp(e={id:"baoyu",color:"#a34336",accent:"#b49050",hair:"crown"}){let t=e.id!=="baoyu",i=new lt;i.name=e.id;let r=[],a=[],n=new Map;function s(f){if(!n.has(f)){let _=On(new $t({color:f,roughness:f==="#282521"?.42:f==="#efbd91"?.55:.78,metalness:0}),f);_.userData.baoyu=!0,n.set(f,_)}return n.get(f)}function o(f,_,A,w=0,L=0,U=0){let N=new st(f,s(_));return N.position.set(w,L,U),N.castShadow=!0,A.add(N),N}function l(f,_,A,w,L,U,N,F){let j=o(new Mt(1,32,24),f,_,A,w,L);return j.scale.set(U,N,F),j}function c(f,_,A,w){return o(new Ei(new ri(f.map(L=>new O(...L))),24,A,6,!1),_,w)}let m="#efbd91",x="#282521",g=e.color,M="#e9d9b7",S=e.accent,d=t,h=e;function u(f,_,A,w){let L=new ri(f.map(ee=>new O(...ee))),U=[],N=[],F=[];for(let ee=0;ee<=48;ee++){let q=L.getPointAt(ee/48),$=L.getTangentAt(ee/48),k=new O().crossVectors($,new O(0,0,1));k.length()<.35&&k.crossVectors($,new O(0,1,0)),k.normalize().multiplyScalar(_/2),U.push(q.x-k.x,q.y-k.y,q.z-k.z,q.x+k.x,q.y+k.y,q.z+k.z),N.push(0,ee/48,1,ee/48),ee<48&&F.push(ee*2,ee*2+1,ee*2+2,ee*2+1,ee*2+3,ee*2+2)}let j=new gt;j.setAttribute("position",new Ye(U,3)),j.setAttribute("uv",new Ye(N,2)),j.setIndex(F),j.computeVertexNormals();let W=o(j,A,w);return W.material.side=2,W}function y(f,_,A){let w=[],L=[],U=[];f.forEach(([F,j,W],ee)=>{for(let q=0;q<=64;q++){let $=q/64*Math.PI*2,k=1+.035*Math.cos($*12)*(1-ee/f.length);w.push(Math.sin($)*j*k,F,Math.cos($)*W*k),U.push(q/64,ee/(f.length-1))}});for(let F=0;F<f.length-1;F++)for(let j=0;j<64;j++){let W=F*65+j,ee=W+64+1;L.push(W,W+1,ee,ee,W+1,ee+1)}let N=new gt;return N.setAttribute("position",new Ye(w,3)),N.setAttribute("uv",new Ye(U,2)),N.setIndex(L),N.computeVertexNormals(),o(N,_,A)}t?(y([[.02,.43,.32],[.2,.39,.29],[.55,.325,.24],[.9,.27,.2],[1.18,.225,.165]],e.skirt??M,i),y([[.6,.338,.252],[.66,.332,.246],[.95,.292,.212],[1.25,.237,.174],[1.55,.236,.156],[1.83,.285,.16],[1.94,.17,.13]],g,i),y([[.585,.342,.256],[.655,.338,.252]],S,i)):y([[.42,.33,.22],[.62,.32,.22],[.95,.28,.2],[1.25,.225,.165],[1.55,.23,.15],[1.83,.285,.16],[1.94,.17,.13]],g,i);function b(f,_,A){let w=new gt;w.setAttribute("position",new Ye(f.flat(),3)),w.setIndex([0,1,2,0,2,3]),w.computeVertexNormals(),w.translate(0,0,A===i?.035:0);let L=o(w,_,A);return L.material.side=2,L}b([[-.115,1.96,.125],[.115,1.96,.125],[.12,1.32,.185],[-.12,1.32,.185]],M,i),b([[-.17,1.94,.145],[-.095,1.99,.15],[.11,1.54,.185],[.05,1.47,.193]],"#f2e5c9",i),b([[.13,1.97,.15],[.19,1.92,.145],[-.075,1.3,.195],[-.135,1.32,.19]],M,i),y([[1.24,.24,.178],[1.32,.242,.181]],t?S:"#453b2c",i),l(S,i,0,1.28,.185,.049,.035,.015),o(new at(.09,.1,.2,24),m,i,0,1.99,0);for(let f of[-1,1]){let _=new lt;_.name=f<0?"ArmLeft":"ArmRight",_.position.set(f*.25,1.8,0),i.add(_),r.push(_);let A=y(d?[[-.7,.2,.18],[-.52,.185,.165],[-.2,.14,.135],[.035,.11,.11]]:[[-.58,.13,.135],[-.43,.155,.15],[-.15,.13,.13],[.035,.11,.11]],g,_);A.rotation.z=f*.18,d?(y([[-.715,.206,.186],[-.655,.2,.18]],S,A),l(m,_,f*.13,-.7,.03,.06,.1,.05)):(l(M,_,f*.1,-.54,.015,.12,.04,.12),l(m,_,f*.105,-.61,.03,.065,.115,.053)),c([[f*.05,-.31,.13],[f*.09,-.44,.147],[f*.12,-.5,.135]],"#76372d",.007,_)}for(let f of[-1,1]){let _=new lt;_.name=f<0?"LegLeft":"LegRight",_.position.set(f*.135,.58,0),i.add(_),r.push(_),d?(l(h.shoe??"#a8343a",_,0,-.535,.17,.068,.045,.14),l(S,_,0,-.52,.3,.028,.028,.028)):(o(new at(.075,.065,.35,16),M,_,0,-.17,0),l("#33312e",_,0,-.39,.035,.095,.16,.13),l("#33312e",_,0,-.48,.1,.1,.073,.18),l("#bda782",_,0,-.527,.1,.101,.018,.179))}let p=new lt;p.name="Head",p.position.set(0,2.24,0),i.add(p);let T=new Mt(1,64,48),v=T.getAttribute("position");for(let f=0;f<v.count;f++){let _=v.getY(f),A=v.getX(f),w=v.getZ(f),L=Ni.smoothstep(-_,.25,1);v.setXYZ(f,A*(t?.245:.255)*(1-(t?.17:.13)*L),_*(_<0?.285:.33),w*.225*(1-.06*L))}for(let f=0;f<v.count;f++){let _=v.getX(f),A=v.getY(f),w=v.getZ(f);w>.1&&v.setZ(f,w+.025*Math.exp(-_*_/7e-4-(A+.035)**2/.003)+.024*Math.exp(-_*_/8e-4-(A+.063)**2/5e-4))}T.computeVertexNormals(),o(T,m,p);for(let f of[-1,1]){l(m,p,f*.247,-.012,-.005,.045,.071,.031),c([[f*.259,.015,.022],[f*.269,-.014,.026],[f*.252,-.04,.025]],"#bc8969",.006,p);let _=new lt;_.position.set(f*.102,.025,.207),_.rotation.y=f*.28,p.add(_),l("#faf0d9",_,0,0,0,.06,.034,.012),l("#493c2c",_,f*-.004,0,.011,.026,.03,.009),l("#211f1d",_,f*-.004,0,.019,.012,.021,.003),l("#fff4dc",_,-.008,.011,.023,.006,.007,.002),l("#d4ba8b",_,.01,-.012,.021,.004,.005,.002);for(let A=0;A<12;A++){let w=A*Math.PI/6;c([[Math.cos(w)*.016,-.001+Math.sin(w)*.02,.021],[Math.cos(w)*.023,-.001+Math.sin(w)*.026,.019]],"#79603d",9e-4,_)}c([[-.06,0,.004],[-.038,.03,.01],[.006,.036,.014],[.05,.018,.006]],x,.006,_),c([[-.05,-.012,.004],[0,-.031,.01],[.048,-.012,.006]],"#be8867",.002,_),c([[-.044,.043,.005],[0,.049,.01],[.043,.03,.005]],"#bb8666",.0018,_),c([[f*.052,.09,.222],[f*.102,.108,.21],[f*.16,.09,.175]],"#43352c",.005,p);for(let A=0;A<8;A++){let w=.058+A*.012,L=.108-Math.abs(w-.102)*.32,U=.222-(w-.052)*.43;c([[f*w,L-.003,U],[f*(w+.003),L+.005,U-.001]],"#5a4633",.0013,p)}}c([[-.015,-.079,.245],[0,-.083,.25],[.014,-.078,.245]],"#b58564",.003,p),l(t?"#b96b64":"#ba7967",p,0,-.136,.2,.043,.011,.004),c([[-.044,-.132,.198],[0,-.138,.206],[.044,-.13,.198]],"#713f36",.0036,p),c([[-.024,-.144,.2],[0,-.147,.201],[.024,-.141,.2]],"#e5aa94",.0022,p),l(x,p,0,.015,-.13,.245,.277,.145),o(new Mt(1,48,32,0,Math.PI*2,0,Math.PI*.55),x,p,0,.025,-.035).scale.set(.278,.337,.25);function R(f,_){let A=new ri(f.map(U=>new O(...U))),w=new Ei(A,24,1,10,!1),L=w.getAttribute("position");for(let U=0;U<=24;U++){let N=A.getPointAt(U/24),F=_*Math.sin(Math.PI*(.06+.94*U/24))**.65+4e-4;for(let j=0;j<=10;j++){let W=U*11+j;L.setXYZ(W,N.x+(L.getX(W)-N.x)*F,N.y+(L.getY(W)-N.y)*F*.6,N.z+(L.getZ(W)-N.z)*F)}}w.computeVertexNormals(),o(w,x,p)}for(let f=0;f<(t?5:7);f++){let _=-.2+f*.063;R([[.07,.31,.075],[_,.24,.225],[_-.045,.1+f%3*.023,.23]],.035)}for(let f of[-1,1])R([[f*.18,.25,.1],[f*.267,.08,.08],[f*.248,-.08,.09]],.047),R([[f*.2,.22,-.14],[f*.27,-.02,-.07],[f*.22,-.18,-.03]],.028),c([[f*.14,.29,.13],[f*.205,.24,.14],[f*.25,.12,.1]],"#514435",.003,p);l(x,p,0,.37,-.09,.13,.13,.125);for(let f=0;f<6;f++)c([[-.08+f*.03,.32,.008],[-.095+f*.036,.4,.012],[-.07+f*.027,.46,-.055]],"#493f32",.003,p);if(t){c([[-.18,.34,-.02],[.18,.36,-.02]],S,.008,p);for(let f of[-1,1])e.hair==="double"?l(x,p,f*.22,.25,-.1,.095,.1,.09):e.hair==="coil"&&l(x,p,f*.1,.28,-.18,.12,.11,.09),R([[f*.19,.12,-.14],[f*.22,-.18,-.13],[f*.16,-.4,-.14]],.042),l(S,p,f*.245,-.09,.007,.011,.024,.009);for(let f=0;f<(h.hair==="nun"?0:5);f++){let _=f*Math.PI*2/5;l(S,p,.18+Math.cos(_)*.024,.28+Math.sin(_)*.024,.14,.018,.022,.008)}}else{let f=o(new Lt(.096,.014,8,32),S,p,0,.355,-.065);f.rotation.x=Math.PI/2;for(let _ of[-1,1])c([[0,.37,.048],[_*.07,.43,.045],[_*.1,.365,.04]],S,.009,p);l("#ad4336",p,0,.397,.057,.025,.035,.012)}{let f="#d9ad55",_="#f3eee0",A=h.hair;if(d){if(A==="high"&&(l(x,p,0,.5,-.05,.095,.15,.09),l(x,p,.02,.6,-.02,.07,.06,.07)),A==="phoenix"){let w=h.id==="yuanchun"?1:.82,L=o(new Lt(.215,.016,6,40),S,p,0,.27,-.05);L.rotation.x=Math.PI/2,o(new Lt(.2*w,.012,6,32,Math.PI),S,p,0,.3,.06).rotation.x=-.3;for(let U=0;U<5;U++){let N=Math.PI*(.14+.18*U),F=Math.cos(N)*.2*w,j=.3+Math.sin(N)*.19*w;l(S,p,F,j,.08,.026,.018,.018),l(S,p,F*1.12,j+.022,.095,.012,.012,.012),l("#c23a2f",p,F,j,.1,.01,.01,.006);let W=o(new ga(.02,.1,5),S,p,F*.88,j+.05,.05);W.rotation.z=-F*4;for(let ee=1;ee<=3;ee++)l(_,p,F*1.12,j-ee*.032,.1,.009,.009,.009)}for(let U of[-1,1])for(let N=0;N<6;N++)l(N===5?"#c23a2f":_,p,U*.235,.14-N*.034,.05,.011,.011,.011);if(h.id==="yuanchun")for(let U=0;U<10;U++){let N=U/10*Math.PI*2;l("#2f6f9a",p,Math.sin(N)*.22,.27,Math.cos(N)*.215-.05,.02,.02,.009)}}if(A==="nun"){let w=o(new Mt(1,32,16,0,Math.PI*2,0,Math.PI*.42),"#d6d3c6",p,0,.04,-.045);w.rotation.x=-.22,w.scale.set(.3,.46,.29),l("#d6d3c6",p,0,-.06,-.17,.25,.32,.1);let L=o(new Lt(1,.05,6,40),"#8f8b7c",p,0,.2,-.04);L.rotation.x=Math.PI/2,L.scale.set(.285,.255,.3),c([[.12,-.2,.18],[.2,-.75,.25]],"#5c4a35",.012,i)}else{let w=h.id==="liwan"?"#c9c9c2":f;if(c([[-.17,.47,-.02],[.05,.4,-.1],[.2,.33,-.16]],w,.007,p),l(_,p,-.17,.47,-.02,.022,.022,.022),h.id!=="liwan"){let L=new lt;L.position.set(-.18,.34,.07),p.add(L),a.push(L),l(f,p,-.18,.345,.07,.032,.032,.016),c([[0,0,0],[0,-.02,.004]],f,.004,L);for(let U of[-1,0,1])for(let N=1;N<=4;N++)l(N===4?"#c23a2f":_,L,U*.02,-N*.03,0,.008,.008,.008)}h.sash&&u([[-.13,.5,.31],[-.135,1,.27],[-.14,1.45,.205],[-.16,1.85,.175],[-.2,1.98,-.04],[0,1.96,-.17],[.2,1.98,-.04],[.16,1.85,.175],[.14,1.45,.205],[.135,1,.27],[.13,.5,.31]],.085,h.sash,i)}}else{o(new at(.07,.085,.1,20),S,p,0,.43,-.08);for(let[L,U]of[[-.045,"#3f6fb0"],[0,"#c23a2f"],[.045,"#3f6fb0"]])l(U,p,L,.44,-.028,.015,.017,.01);let w=o(new Lt(1,.07,6,48),"#b3322b",p,0,.165,-.012);w.rotation.x=Math.PI/2,w.scale.set(.262,.24,.28),l(S,p,0,.168,.232,.032,.026,.012),l("#e0432f",p,0,.168,.244,.016,.016,.008);for(let L of[-1,1])c([[L*.03,.172,.238],[L*.08,.19,.228],[L*.13,.168,.205]],S,.006,p);y([[.74,.34,.24],[.79,.338,.238],[.95,.302,.217],[1.25,.247,.182],[1.55,.247,.167],[1.8,.294,.17],[1.9,.2,.147]],"#2f4858",i);for(let L=0;L<30;L++){let U=L/30*Math.PI*2;o(new at(.012,.018,.13,4),L%2?"#d8a84c":"#c23a2f",i,Math.sin(U)*.338,.67,Math.cos(U)*.238)}for(let[L,U,N]of[[-.11,1.42,.165],[.11,1.42,.165],[-.17,.98,.19],[.17,.98,.19]]){let F=l(S,i,L,U,N,.058,.058,.012);F.rotation.y=L*2.6,l("#c23a2f",i,L*1.02,U,N+.008,.03,.03,.008).rotation.y=L*2.6}c([[.07,1.3,.2],[.1,1.02,.235],[.09,.8,.27]],"#d8a84c",.008,i),l("#d8a84c",i,.09,.79,.272,.022,.022,.022),o(new at(.012,.035,.14,8),"#c23a2f",i,.09,.71,.272)}}for(let f of[-1,1]){let _=new lt;_.name=f<0?"RibbonLeft":"RibbonRight",_.position.set(f*.07,2.56,-.16),i.add(_),a.push(_),b([[0,0,0],[.034,0,0],[f*.045,-.78,-.11],[f*.01,-.76,-.115]],g,_)}if(d){let f="#d9ad55";c([[-.13,1.93,.135],[-.08,1.8,.19],[0,1.74,.205],[.08,1.8,.19],[.13,1.93,.135]],f,.008,i),h.id==="baochai"?(l(f,i,0,1.66,.21,.06,.045,.014),l("#c23a2f",i,0,1.66,.224,.014,.014,.006),c([[-.03,1.74,.205],[-.04,1.7,.21]],f,.005,i),c([[.03,1.74,.205],[.04,1.7,.21]],f,.005,i)):h.hair!=="nun"&&(l(f,i,0,1.72,.212,.022,.022,.01),l("#f3eee0",i,0,1.68,.214,.014,.014,.014))}else c([[-.085,1.94,.16],[-.04,1.67,.205],[0,1.56,.208],[.065,1.8,.187],[.08,1.94,.155]],"#806545",.006,i),l("#83a68a",i,0,1.56,.214,.049,.062,.012),l(S,i,0,1.59,.229,.008,.009,.004),c([[0,1.5,.22],[0,1.41,.225]],"#a74a36",.011,i);for(let f of[-1,1])for(let _ of[-1,1])for(let A=0;A<3;A++){let w=f*(.19+A*.018),L=.58+A*.19,U=_*(.195-A*.012);c([[w,L-.05,U],[w-f*.025,L+.055,U]],"#b66d4d",.003,i);for(let N=0;N<5;N++){let F=N*Math.PI*2/5;l("#ba7957",i,w+Math.cos(F)*.018,L+Math.sin(F)*.021,U,.014,.02,.003)}}return i.traverse(f=>f.layers.enable(1)),{avatar:i,limbs:r,ribbons:a}}function qo(e,t){return Qp(e)}var Bn=2.35,Yo=e=>Math.floor(e.distance)+e.jades*25,Zo=e=>Math.min(22,13+e/180),ef=e=>Zo(e.distance)*(e.boost>0?1.3:1);function Jo(e=1){return{phase:"ready",distance:0,lane:0,x:0,y:0,vy:0,slide:0,boost:0,grace:0,hearts:3,jades:0,items:[],nextRow:38,seed:e>>>0,serial:0,message:"\u5DE6\u53F3\u6362\u9053 \xB7 \u4E0A\u952E\u52A0\u901F \xB7 \u7A7A\u683C\u8DF3\u8DC3",notice:0}}function La(e){return e.seed=Math.imul(e.seed,1664525)+1013904223>>>0,e.seed/4294967296}function Na(e,t){e.phase==="running"&&(t==="left"&&(e.lane=Math.max(-1,e.lane-1)),t==="right"&&(e.lane=Math.min(1,e.lane+1)),t==="jump"&&e.y===0&&(e.slide=0,e.vy=8.2),t==="boost"&&(e.boost=2.5,e.message="\u52A0\u901F\uFF01",e.notice=1))}function zn(e){for(;e.nextRow<e.distance+110;){let t=e.nextRow,i=t===38,r=Math.floor(La(e)*3)-1,a=i?[0]:[-1,0,1].filter(o=>o!==r),n=i||La(e)<.65,s=a[0];for(let o of a){let l=n&&o===s?"stone":["stone","screen"][Math.floor(La(e)*2)];e.items.push({id:++e.serial,at:t,lane:o,kind:l,done:!1})}for(let o=1;o<=2;o++)e.items.push({id:++e.serial,at:t+o*2.2,lane:i?-1:r,kind:"mooncake",height:.9,done:!1});if(n){let o=Zo(t);for(let l of[.14,.27,.4,.53,.64])e.items.push({id:++e.serial,at:t+o*(l-.27),lane:s,kind:"mooncake",height:.9+8.2*l-10.5*l*l,done:!1})}e.nextRow+=22+La(e)*7}}function tf(e,t){if(e.phase!=="running")return;let i=Math.max(1,Math.ceil(Math.min(t,.1)/.016)),r=Math.min(t,.1)/i;for(let a=0;a<i&&e.phase==="running";a++){e.distance+=ef(e)*r,e.x+=(e.lane*Bn-e.x)*Math.min(1,r*15);let n=r*(e.boost>0?1.3:1);(e.y>0||e.vy>0)&&(e.y=Math.max(0,e.y+e.vy*n),e.vy-=21*n,e.y===0&&(e.vy=0)),e.boost=Math.max(0,e.boost-r),e.slide=Math.max(0,e.slide-r),e.grace=Math.max(0,e.grace-r),e.notice=Math.max(0,e.notice-r),zn(e);for(let s of e.items){if(s.done)continue;let o=s.at-e.distance;if(s.kind==="mooncake"){Math.abs(o)<.42&&Math.abs(e.x-s.lane*2.35)<.42&&Math.abs(e.y+.9-(s.height??.9))<.43&&(s.done=!0,e.jades++);continue}if(o<-.95){s.done=!0;continue}Math.abs(o)>.65||Math.abs(e.x-s.lane*2.35)>.72||s.kind==="stone"&&e.y>.85||e.grace>0||(s.done=!0,e.hearts--,e.grace=1.8,e.notice=2.4,e.message=s.kind==="stone"?"\u78B0\u5230\u5C71\u77F3\uFF1A\u8DF3\u8DC3\u6216\u6362\u9053":s.kind==="beam"?"\u78B0\u5230\u6A2A\u6746\uFF1A\u8BF7\u63D0\u524D\u6362\u9053":"\u78B0\u5230\u5C4F\u98CE\uFF1A\u8BF7\u63D0\u524D\u6362\u9053",e.hearts<=0&&(e.phase="over"))}}e.items=e.items.filter(a=>a.at>e.distance-18)}var Ia=[{id:"baoyu",name:"\u8D3E\u5B9D\u7389",color:"#b8453f",accent:"#e6c077",hair:"crown"},{id:"daiyu",name:"\u6797\u9EDB\u7389",color:"#5f9c95",accent:"#ecd3a4",hair:"double",skirt:"#e6eee6",sash:"#cfe3dc",shoe:"#7aa79c"},{id:"baochai",name:"\u859B\u5B9D\u9497",color:"#d3a348",accent:"#f4ddae",hair:"coil",skirt:"#d6cf8a",sash:"#f1e4c2",shoe:"#8a6c9a"},{id:"yuanchun",name:"\u8D3E\u5143\u6625",color:"#913b3d",accent:"#e0b04d",hair:"phoenix",skirt:"#d9b45a",sash:"#efd38a",shoe:"#c69a3e"},{id:"yingchun",name:"\u8D3E\u8FCE\u6625",color:"#e0b46d",accent:"#f4dcbd",hair:"double",skirt:"#f1e6d0",sash:"#f0d6c5"},{id:"tanchun",name:"\u8D3E\u63A2\u6625",color:"#377e6d",accent:"#dfb359",hair:"high",skirt:"#eee1c4",sash:"#e6d27f"},{id:"xichun",name:"\u8D3E\u60DC\u6625",color:"#7793aa",accent:"#d8d9cb",hair:"double",skirt:"#e6e8e2",sash:"#d6dde3"},{id:"xiangyun",name:"\u53F2\u6E58\u4E91",color:"#8e679e",accent:"#e7b5b1",hair:"high",skirt:"#f1dede",sash:"#f2c9c9"},{id:"miaoyu",name:"\u5999\u7389",color:"#babfb2",accent:"#557968",hair:"nun",skirt:"#d4d6cc",shoe:"#6f6f66"},{id:"xifeng",name:"\u738B\u7199\u51E4",color:"#b14556",accent:"#efd176",hair:"phoenix",skirt:"#3f8a6a",sash:"#e7b2b5"},{id:"qiaojie",name:"\u5DE7\u59D0",color:"#d4828d",accent:"#f0d9b0",hair:"double",skirt:"#f6e2c8",sash:"#f6d0d4"},{id:"liwan",name:"\u674E\u7EA8",color:"#737b95",accent:"#c7c6b4",hair:"coil",skirt:"#d8d6cc",shoe:"#5d5f66"},{id:"keqing",name:"\u79E6\u53EF\u537F",color:"#b47a64",accent:"#e6c5ae",hair:"high",skirt:"#e9d6c6",sash:"#e5c2c9"}],rf={daiyu:[0,-1],yuanchun:[2,1],liwan:[3,-1],qiaojie:[3,1],baochai:[4,1],miaoyu:[5,-1],xichun:[6,1],tanchun:[7,-1],yingchun:[8,1],xifeng:[10,-1],keqing:[11,1],xiangyun:[12,-1]},Ko={\u6F47\u6E58\u7AF9\u5F84:"\u6F47\u6E58\u9986 \xB7 \u51E4\u5C3E\u68EE\u68EE\uFF0C\u9F99\u541F\u7EC6\u7EC6\uFF0C\u9EDB\u7389\u501A\u7AF9\u800C\u7ACB",\u6021\u7EA2\u82B1\u5F71:"\u6021\u7EA2\u9662 \xB7 \u7EA2\u9999\u7EFF\u7389\uFF0C\u6D77\u68E0\u82AD\u8549\u2014\u2014\u56DE\u5230\u81EA\u5DF1\u7684\u9662\u5B50",\u6C81\u82B3\u6C34\u69AD:"\u6C81\u82B3\u6865 \xB7 \u5143\u5983\u7701\u4EB2\u65F6\u9A7B\u8DF8\u5904\uFF0C\u82B1\u6E86\u6D41\u9999",\u7A3B\u9999\u7530\u56ED:"\u7A3B\u9999\u6751 \xB7 \u674F\u5E18\u5728\u671B\uFF0C\u674E\u7EA8\u5E26\u7740\u5DE7\u59D0\u5728\u7BF1\u4E0B",\u8605\u829C\u53E0\u77F3:"\u8605\u829C\u82D1 \xB7 \u5947\u8349\u4ED9\u85E4\uFF0C\u5F02\u9999\u6251\u9F3B\uFF0C\u5B9D\u9497\u5728\u77F3\u7554",\u680A\u7FE0\u677E\u9662:"\u680A\u7FE0\u5EB5 \xB7 \u7EA2\u6885\u6620\u96EA\uFF0C\u5999\u7389\u626B\u96EA\u70F9\u8336",\u85D5\u9999\u83B2\u5CB8:"\u85D5\u9999\u69AD \xB7 \u8299\u84C9\u5F71\u7834\u5F52\u5170\u6868\uFF0C\u60DC\u6625\u4E34\u6C34\u4F5C\u753B",\u79CB\u723D\u957F\u5ECA:"\u79CB\u723D\u658B \xB7 \u68A7\u6850\u82AD\u8549\uFF0C\u63A2\u6625\u5728\u6B64\u8D77\u6D77\u68E0\u8BD7\u793E",\u7F00\u9526\u82B1\u5F84:"\u7F00\u9526\u697C \xB7 \u8FCE\u6625\u72EC\u5750\uFF0C\u4E00\u5377\u300A\u592A\u4E0A\u611F\u5E94\u7BC7\u300B",\u7D2B\u83F1\u6D32\u7554:"\u7D2B\u83F1\u6D32 \xB7 \u6C60\u5858\u4E00\u591C\u79CB\u98CE\u51B7\uFF0C\u5439\u6563\u82B0\u8377\u7EA2\u7389\u5F71",\u51F8\u78A7\u5C71\u5E84:"\u51F8\u78A7\u5C71\u5E84 \xB7 \u4E2D\u79CB\u5F00\u5BB4\uFF0C\u6842\u5F71\u91CC\u4E00\u7F15\u7B1B\u58F0",\u5929\u9999\u697C:"\u5929\u9999\u697C \xB7 \u4F1A\u82B3\u56ED\u65E7\u5730\uFF0C\u4E09\u6625\u53BB\u540E\u8BF8\u82B3\u5C3D",\u51F9\u6676\u6EAA\u9986:"\u51F9\u6676\u6EAA\u9986 \xB7 \u5BD2\u5858\u6E21\u9E64\u5F71\uFF0C\u51B7\u6708\u846C\u82B1\u9B42"};function af(e){if(e.phase!=="running")return;let t=jo(e.distance);if(e.area!==t){let i=e.area!==void 0;e.area=t,i&&Ko[t]&&e.grace===0&&(e.message=Ko[t],e.notice=3.2)}}function nf(e,t,i){let r=new kp({antialias:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(devicePixelRatio,1.5)),r.outputColorSpace=ft,r.shadowMap.enabled=!0,r.shadowMap.type=1,r.toneMapping=4,r.toneMappingExposure=1.05;let a=r.domElement;a.tabIndex=0,a.setAttribute("aria-label","\u5927\u89C2\u56ED\u8DD1\u9177\u8D5B\u9053\uFF0C\u5DE6\u53F3\u65B9\u5411\u952E\u6362\u9053\uFF0C\u4E0A\u65B9\u5411\u952E\u52A0\u901F\uFF0C\u7A7A\u683C\u8DF3\u8DC3"),e.appendChild(a);let n=new As;n.background=new et("#88aecb"),n.fog=new rc("#e4d3b8",52,150);let s=new qt(57,1,.1,180);s.position.set(0,5.8,24),s.lookAt(0,3,-12);let o=1,l=new O(-.55,.27,-.79).normalize();n.add(new ao("#cfe0ef","#7d6446",.8));let c=new co("#ffcf98",4);c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-32,right:32,top:30,bottom:-30,near:1,far:170}),c.shadow.bias=-4e-4,c.shadow.normalBias=.03,c.target.position.set(0,0,-10),c.position.copy(c.target.position).addScaledVector(l,75),n.add(c,c.target);let m=new ao("#ffe4c4","#b58f6a",.3);n.add(m);let x=new co("#bcd2ff",.6);x.position.set(4,6,14),n.add(x);{let Z=document.createElement("canvas");Z.width=512,Z.height=256;let H=Z.getContext("2d"),te=H.createLinearGradient(0,0,0,256);te.addColorStop(0,"#5f8fbd"),te.addColorStop(.4,"#bfd2dc"),te.addColorStop(.5,"#ffdcb0"),te.addColorStop(.53,"#9c8766"),te.addColorStop(1,"#4f4536"),H.fillStyle=te,H.fillRect(0,0,512,256);let J=(Math.atan2(l.z,l.x)/(2*Math.PI)+.5)*512,I=(.5-Math.asin(l.y)/Math.PI)*256,Se=H.createRadialGradient(J,I,0,J,I,80);Se.addColorStop(0,"rgba(255,244,220,1)"),Se.addColorStop(.3,"rgba(255,214,160,.55)"),Se.addColorStop(1,"rgba(255,200,140,0)"),H.fillStyle=Se,H.fillRect(0,0,512,256);let le=new Xt(Z);le.colorSpace=ft,le.mapping=303,n.environment=le,n.environmentIntensity=.6}let g=.68,M=Jp(n),S=M.tiles,d=Zp();d.apply(n);{let Z=document.createElement("canvas");Z.width=2048,Z.height=512;let H=Z.getContext("2d"),te=H.createLinearGradient(0,0,0,512);te.addColorStop(0,"#88aecb"),te.addColorStop(.16,"#88aecb"),te.addColorStop(.5,"#d4dad6"),te.addColorStop(.78,"#f4dab2"),te.addColorStop(1,"#e4d3b8"),H.fillStyle=te,H.fillRect(0,0,2048,512);let J=7;const I=()=>(J=J*16807%2147483647,J/2147483647);for(let E=0;E<46;E++){let D=I()*2048,G=150+I()*100,K=40+I()*90,se=H.createRadialGradient(D,G,0,D,G,K);se.addColorStop(0,"rgba(255,253,246,.32)"),se.addColorStop(1,"rgba(255,253,246,0)"),H.fillStyle=se,H.fillRect(D-K,G-K,K*2,K*2)}let Se=(E,D,G,K,se,ve)=>{H.fillStyle=G,H.beginPath(),H.moveTo(0,512);for(let ce=0;ce<=2048;ce+=4){let me=ce/2048*Math.PI*2,Ee=.55*Math.sin(me*K+ve)+.3*Math.sin(me*se+ve*1.7)+.15*Math.sin(me*(se*2+1)+ve*.3);H.lineTo(ce,E-D*(.5+.5*Ee)**1.6)}H.lineTo(2048,512),H.closePath(),H.fill();let z=H.createLinearGradient(0,E-D*.25,0,E+50);z.addColorStop(0,"rgba(242,222,190,0)"),z.addColorStop(1,"rgba(242,222,190,.9)"),H.fillStyle=z,H.fillRect(0,E-D*.25,2048,512)};{let E=(Math.atan2(l.x,l.z)/(2*Math.PI)%1+1)%1*2048,D=H.createRadialGradient(E,130,0,E,130,300);D.addColorStop(0,"rgba(255,236,196,.8)"),D.addColorStop(.25,"rgba(255,210,150,.45)"),D.addColorStop(1,"rgba(255,190,130,0)"),H.fillStyle=D,H.fillRect(0,0,2048,512),H.fillRect(0,0,2048,512);let G=H.createLinearGradient(0,0,0,110);G.addColorStop(0,"#88aecb"),G.addColorStop(1,"rgba(136,174,203,0)"),H.fillStyle=G,H.fillRect(0,0,2048,110)}Se(330,190,"rgba(124,132,152,.5)",3,7,.4),Se(372,120,"rgba(98,104,124,.56)",5,11,2.1),Se(408,70,"rgba(72,78,94,.62)",8,17,4.2),H.fillStyle="rgba(62,66,80,.55)";for(let E of[610,1660]){let D=398;for(let G=0;G<7;G++){let K=15-G*1.4;H.fillRect(E-K*.55,D-9,K*1.1,9),H.beginPath(),H.moveTo(E-K-4,D-9),H.lineTo(E+K+4,D-9),H.lineTo(E+K*.6,D-14),H.lineTo(E-K*.6,D-14),H.fill(),D-=14}H.fillRect(E-1,D-12,2,12)}H.strokeStyle="rgba(50,56,54,.6)",H.lineWidth=1.6;for(let E=0;E<14;E++){let D=300+I()*1400,G=120+I()*90,K=4+I()*4;H.beginPath(),H.moveTo(D-K,G-K*.4),H.quadraticCurveTo(D-K*.4,G-K*.7,D,G),H.quadraticCurveTo(D+K*.4,G-K*.7,D+K,G-K*.4),H.stroke()}let le=H.createLinearGradient(0,420,0,512);le.addColorStop(0,"rgba(228,211,184,0)"),le.addColorStop(1,"#e4d3b8"),H.fillStyle=le,H.fillRect(0,420,2048,92);let ye=new Xt(Z);ye.colorSpace=ft,ye.wrapS=1e3;let P=new st(new at(140,140,80,72,1,!0),new Pr({map:ye,side:1,fog:!1,depthWrite:!1}));P.position.set(0,22,0),P.renderOrder=-1,n.add(P)}let h=(()=>{let Z=document.createElement("canvas");Z.width=Z.height=256;let H=Z.getContext("2d"),te=H.createRadialGradient(128,128,0,128,128,128);te.addColorStop(0,"rgba(255,250,236,1)"),te.addColorStop(.07,"rgba(255,238,205,1)"),te.addColorStop(.2,"rgba(255,206,140,.45)"),te.addColorStop(.5,"rgba(255,180,110,.1)"),te.addColorStop(1,"rgba(255,170,100,0)"),H.fillStyle=te,H.fillRect(0,0,256,256);let J=new Xt(Z);J.colorSpace=ft;let I=new Pr({map:J,transparent:!0,blending:2,depthWrite:!1,fog:!1});I.color.setScalar(6);let Se=new st(new Kt(1,1),I);return Se.frustumCulled=!1,Se.renderOrder=-1,n.add(Se),Se})(),u=`uniform float time;uniform float run;attribute vec4 aSeed;varying vec2 vC;varying float vA;varying vec3 vCol;
void main(){
#ifdef MOTES
vec3 p=vec3((aSeed.x-.5)*30.+sin(time*.3+aSeed.w*6.3)*.8,.4+mod(aSeed.y*7.+time*.12*(.5+aSeed.z),7.),mod(aSeed.z*40.+run,40.)-32.);float sz=.03+aSeed.w*.03;float ang=0.;
#else
vec3 p=vec3((aSeed.x-.5)*26.+sin(time*.8+aSeed.w*6.28)*1.2,.2+mod(aSeed.y*9.-time*(.35+aSeed.z*.4),9.),mod(aSeed.z*46.+run,46.)-36.);float sz=.08*(.7+aSeed.w*.6);float ang=time*(1.+aSeed.w*2.)+aSeed.x*10.;
#endif
vec4 mv=viewMatrix*vec4(p,1.);vC=position.xy;
vec2 rc=mat2(cos(ang),-sin(ang),sin(ang),cos(ang))*position.xy*vec2(sz,sz*.7);
#ifndef MOTES
rc.y*=.35+.65*abs(sin(time*2.+aSeed.y*9.));
#endif
mv.xy+=rc;gl_Position=projectionMatrix*mv;
vA=smoothstep(70.,25.,-mv.z)*smoothstep(.5,2.,-mv.z);
vCol=mix(vec3(1.,.72,.8),vec3(1.,.93,.95),aSeed.w);}`,y=`varying vec2 vC;varying float vA;varying vec3 vCol;
void main(){
#ifdef MOTES
float d=length(vC);float a=1.-smoothstep(0.,1.,d);gl_FragColor=vec4(vec3(1.,.85,.6)*3.*a,a*vA*.7);
#else
float d=length(vC*vec2(1.,1.35));if(d>1.)discard;float a=(1.-smoothstep(.65,1.,d))*vA;gl_FragColor=vec4(vCol*(.9+.3*(1.-d)),a*.95);
#endif
}`,b=(Z,H,te)=>{let J=[],I=[],Se=[];for(let P=0;P<Z;P++){let E=[Math.random(),Math.random(),Math.random(),Math.random()];for(let[G,K]of[[-1,-1],[1,-1],[1,1],[-1,1]])J.push(G,K,0),I.push(...E);let D=P*4;Se.push(D,D+1,D+2,D,D+2,D+3)}let le=new gt;le.setAttribute("position",new Ye(J,3)),le.setAttribute("aSeed",new Ye(I,4)),le.setIndex(Se);let ye=new st(le,new jt({uniforms:{time:{value:0},run:{value:0}},vertexShader:u,fragmentShader:y,transparent:!0,depthWrite:!1,blending:H,defines:te}));return ye.frustumCulled=!1,n.add(ye),ye},p=b(260,1,{}),T=b(140,2,{MOTES:""}),v=null;try{if(r.extensions.has("EXT_color_buffer_float")||r.extensions.has("EXT_color_buffer_half_float")){let Z="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",H=(me,Ee)=>new jt({uniforms:Ee,vertexShader:Z,fragmentShader:me,depthTest:!1,depthWrite:!1}),te=me=>new Gt(1,1,{type:1016,samples:me,depthBuffer:me>0}),J=te(Math.min(4,r.capabilities.maxSamples||0)),I=te(0),Se=te(0),le=te(0),ye=te(0),P=new st(new Kt(2,2)),E=new Ea(-1,1,1,-1,0,1),D=new As;P.frustumCulled=!1,D.add(P);let G=H("uniform sampler2D tex;uniform float thr;varying vec2 vUv;void main(){vec3 c=min(texture2D(tex,vUv).rgb,vec3(6.));float l=dot(c,vec3(.2126,.7152,.0722));gl_FragColor=vec4(c*smoothstep(thr,thr*2.,l),1.);}",{tex:{value:null},thr:{value:1.5}}),K=H("uniform sampler2D tex;uniform vec2 dir;varying vec2 vUv;void main(){vec3 s=texture2D(tex,vUv).rgb*.227027;s+=(texture2D(tex,vUv+dir*1.3846).rgb+texture2D(tex,vUv-dir*1.3846).rgb)*.316216;s+=(texture2D(tex,vUv+dir*3.2308).rgb+texture2D(tex,vUv-dir*3.2308).rgb)*.07027;gl_FragColor=vec4(s,1.);}",{tex:{value:null},dir:{value:new Me}}),se=H("uniform sampler2D tex;uniform vec2 sun;uniform float vis;varying vec2 vUv;void main(){vec2 d=(vUv-sun)*(.92/48.);vec2 uv=vUv;float w=1.;vec3 a=vec3(0.);for(int i=0;i<48;i++){uv-=d;a+=texture2D(tex,uv).rgb*w;w*=.962;}gl_FragColor=vec4(a*(vis/48.),1.);}",{tex:{value:null},sun:{value:new Me(.2,.8)},vis:{value:0}}),ve=H(`uniform sampler2D tex;uniform sampler2D bloom;uniform sampler2D ray;uniform float time;uniform float exposure;uniform vec2 res;varying vec2 vUv;
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec3 toSRGB(vec3 c){return mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(vec3(.0031308),c));}
void main(){vec3 c=texture2D(tex,vUv).rgb;c+=texture2D(bloom,vUv).rgb*.65;c+=texture2D(ray,vUv).rgb*vec3(1.,.8,.55)*1.2;c*=exposure;c=aces(c);
float l=dot(c,vec3(.2126,.7152,.0722));c=mix(c,c*vec3(.92,1.,1.06),(1.-l)*.45);c=mix(c,c*vec3(1.06,1.,.9),l*.35);c=max(mix(vec3(l),c,1.12),0.);
vec2 q=vUv-.5;c*=1.-dot(q,q)*.65;c=toSRGB(c);c+=(fract(sin(dot(vUv*res+time,vec2(12.9898,78.233)))*43758.5453)-.5)/255.;gl_FragColor=vec4(c,1.);}`,{tex:{value:null},bloom:{value:null},ray:{value:null},time:{value:0},exposure:{value:.98},res:{value:new Me(1,1)}}),z=(me,Ee)=>{P.material=me,r.setRenderTarget(Ee),r.render(D,E)},ce=new O;v={size(me,Ee){let he=r.getPixelRatio(),Ne=Math.max(1,Math.floor(me*he)),Fe=Math.max(1,Math.floor(Ee*he)),Ve=Math.max(1,Ne>>1),tt=Math.max(1,Fe>>1);J.setSize(Ne,Fe),I.setSize(Ve,tt),ye.setSize(Ve,tt),Se.setSize(Math.max(1,Ve>>1),Math.max(1,tt>>1)),le.setSize(Math.max(1,Ve>>1),Math.max(1,tt>>1)),ve.uniforms.res.value.set(Ne,Fe)},render(me){r.setRenderTarget(J),r.render(n,s),G.uniforms.tex.value=J.texture,z(G,I);for(let[he,Ne,Fe,Ve]of[[I,Se,1,0],[Se,le,0,1],[le,Se,2,0],[Se,le,0,2],[le,Se,3,0],[Se,le,0,3]])K.uniforms.tex.value=he.texture,K.uniforms.dir.value.set(Fe/he.width,Ve/he.height),z(K,Ne);ce.copy(h.position).project(s);let Ee=ce.z<1?Math.max(0,Math.min(1,1.35-Math.hypot(ce.x,ce.y)*.6)):0;se.uniforms.tex.value=I.texture,se.uniforms.sun.value.set(ce.x*.5+.5,ce.y*.5+.5),se.uniforms.vis.value=Ee*.85,z(se,ye),ve.uniforms.tex.value=J.texture,ve.uniforms.bloom.value=le.texture,ve.uniforms.ray.value=ye.texture,ve.uniforms.time.value=me%1e4/1e3,z(ve,null)},dispose(){for(let me of[J,I,Se,le,ye])me.dispose();for(let me of[G,K,se,ve])me.dispose();P.geometry.dispose()}}}}catch{v=null}function R(Z){let H=Z/1e3;Go.value=H,h.position.copy(s.position).addScaledVector(l,120),h.quaternion.copy(s.quaternion),h.scale.setScalar(64);for(let te of[p,T])te.material.uniforms.time.value=H,te.material.uniforms.run.value=k.distance;Vi.tex&&(Vi.tex.offset.x=H*.013,Vi.tex.offset.y=-H*.021),[2,6,9,12].forEach((te,J)=>{pr[J].value=S[te]&&S[te].visible?S[te].position.z:1e5}),s.position.y+=jp(4)*.9}let f=Kp(),_=$p(),A=new Map,w=(Z,H,te,J=0,I=0,Se=0)=>{if(!A.has(H)){let ye=new $t({color:H,roughness:.78});M.applySurface(ye,H),On(ye,H),Ia.some(P=>P.color===H)&&(ye.map=_,ye.roughness=.82),["#302b2c","#3a3031"].includes(H)&&(ye.map=f,ye.color.set("#ffffff"),ye.roughness=.7),A.set(H,ye)}let le=new st(Z,A.get(H));return le.position.set(J,I,Se),le.castShadow=!0,le.receiveShadow=!0,te.add(le),le},L=Ia.slice(1).map((Z,H)=>{let te=qo(Z,w),[J,I]=rf[Z.id]??[H%S.length,H%2==0?-1:1];return te.avatar.scale.setScalar(Z.id==="qiaojie"?.53:g),te.avatar.position.set(I*([2,6,9,12].includes(J)?3.35:5.5),0,7),te.avatar.rotation.y=-I*.65,S[J%S.length].add(te.avatar),d.apply(te.avatar),te}),U=new lt,N=[],F=[];n.add(U);let j=Z=>Z.traverse(H=>{H instanceof st&&H.geometry.dispose()});function W(Z){n.remove(U);let H=new Set;U.traverse(J=>{if(J instanceof st){let I=J.material;(I.userData.baoyu||I.userData.characterFace)&&H.add(I)}}),H.forEach(J=>{J.map?.dispose(),J.dispose()}),j(U);let te=qo(Ia[Z]??Ia[0],w);U=te.avatar,N=te.limbs,F=te.ribbons,n.add(U),d.apply(U)}W(0);let ee=new Map;function q(Z){let H=new lt;if(n.add(H),ee.set(Z.id,H),Z.kind==="mooncake"){let te=new lt;te.position.y=Z.height??.9,H.add(te);let J=w(new at(.28,.28,.14,32),"#bb7836",te);J.rotation.x=Math.PI/2;for(let I=0;I<12;I++){let Se=I*Math.PI/6;w(new Mt(.065,8,6),"#c68b44",te,Math.cos(Se)*.25,Math.sin(Se)*.25,0).scale.z=1.1}w(new Lt(.205,.018,5,32),"#e3b565",te,0,0,.084);for(let I=0;I<6;I++){let Se=I*Math.PI/3,le=w(new Lt(.065,.012,4,12),"#edc780",te,Math.cos(Se)*.068,Math.sin(Se)*.068,.088);le.scale.y=.7,le.rotation.z=Se}w(new Mt(.034,8,6),"#e6b665",te,0,0,.085).scale.z=.3}else if(Z.kind==="stone"){let te=Z.id*1.37,J=(le,ye)=>{let P=le.getAttribute("position");for(let E=0;E<P.count;E++){let D=P.getX(E),G=P.getY(E),K=P.getZ(E),se=1+ye*(.55*Math.sin(D*7+te)*Math.sin(G*6+te*.7)+.45*Math.sin(K*9+G*5+te));P.setXYZ(E,D*se,G*se,K*se)}return le.computeVertexNormals(),le};w(new Pt(1.25,.14,.85),"#999da0",H,0,.07,0),w(J(new yn(1,3),.16),"#8d9689",H,0,.42,0).scale.set(.58,.34,.42);let I=w(J(new Lt(.27,.13,10,28),.12),"#8d9689",H,.06,.82,0);I.rotation.z=.35+Math.sin(te)*.2,I.scale.set(1,1.15,1.2);let Se=w(J(new Lt(.15,.075,8,20),.12),"#8d9689",H,-.22,1.07,.02);Se.rotation.z=-.5,Se.rotation.y=.4,w(J(new yn(1,2),.2),"#8d9689",H,.2,1.12,-.03).scale.set(.12,.16,.11)}else if(Z.kind==="beam"){for(let te of[-.95,.95])w(new at(.09,.09,2.8,8),"#aa5438",H,te,1.4,0);w(new Pt(2.1,.46,.45),"#ac573b",H,0,1.76,0);for(let te of[-.65,0,.65])w(new Pt(.15,.47,.47),"#e8c27a",H,te,1.76,0)}else for(let te=-1;te<=1;te++){let J=new lt;J.position.set(te*.56,0,te===0?-.06:.08),J.rotation.y=te*.3,H.add(J);for(let Se of[-.28,.28])w(new Pt(.08,2.42,.09),"#744538",J,Se,1.25,0),w(new Pt(.13,.09,.34),"#744538",J,Se,.05,0);for(let Se of[2.42,1.94,.44,.08])w(new Pt(.62,.07,.09),"#744538",J,0,Se,0);w(new Pt(.5,.4,.04),"#8d6350",J,0,2.18,0),w(new Pt(.5,.3,.04),"#8d6350",J,0,.26,0);for(let Se of[-1,1])w(new Mt(.06,10,8),"#d8aa51",J,0,Se>0?2.18:.26,.03);let I=new st(new Kt(.5,1.46),$(te+1));I.position.set(0,1.19,.005),I.castShadow=!0,I.receiveShadow=!0,J.add(I),te===0&&(w(new Pt(.7,.1,.12),"#744538",J,0,2.5,0),w(new Mt(.07,10,8),"#d8aa51",J,0,2.6,0))}return d.apply(H),H}function $(Z){if(!A.has("ink"+Z)){if(!A.has("ink-base")){let te=document.createElement("canvas");te.width=768,te.height=768;let J=te.getContext("2d"),I=11;const Se=()=>(I=I*16807%2147483647,I/2147483647);J.fillStyle="#eee3c8",J.fillRect(0,0,768,768);for(let P=0;P<9e3;P++)J.fillStyle=`rgba(150,120,70,${Se()*.07})`,J.fillRect(Se()*768,Se()*768,2,1);for(let[P,E,D,G]of[[300,220,"rgba(110,125,120,.35)",1],[420,160,"rgba(70,80,76,.55)",2],[560,120,"rgba(40,46,44,.7)",3]]){J.fillStyle=D,J.beginPath(),J.moveTo(0,768);for(let se=0;se<=768;se+=4)J.lineTo(se,P-E*Math.max(0,.6*Math.sin(se/(70+G*20)+G)+.4*Math.sin(se/(31+G*7)+G*2)));J.lineTo(768,768),J.fill();let K=J.createLinearGradient(0,P-30,0,P+70);K.addColorStop(0,"rgba(238,227,200,0)"),K.addColorStop(1,"rgba(238,227,200,.95)"),J.fillStyle=K,J.fillRect(0,P-30,768,100)}J.strokeStyle="rgba(30,30,28,.85)",J.lineCap="round",J.lineWidth=7,J.beginPath(),J.moveTo(70,760),J.bezierCurveTo(90,640,40,560,120,470),J.stroke();for(let P=0;P<5;P++){let E=120-P*6,D=470+P*55;J.lineWidth=3,J.beginPath(),J.moveTo(E-10,D),J.lineTo(E+90-P*8,D-20),J.stroke();for(let G=0;G<26;G++)J.fillStyle=`rgba(34,52,40,${.35+Se()*.4})`,J.beginPath(),J.ellipse(E+Se()*90,D-18+Se()*16,14,5,Se(),0,6.3),J.fill()}J.strokeStyle="rgba(40,40,38,.8)",J.lineWidth=2,J.beginPath(),J.moveTo(330,640),J.quadraticCurveTo(360,655,400,640),J.stroke(),J.beginPath(),J.moveTo(365,640),J.lineTo(368,610),J.stroke();for(let P=0;P<6;P++){let E=260+P*34+Se()*20,D=90+Se()*60;J.beginPath(),J.moveTo(E-7,D-3),J.quadraticCurveTo(E-3,D-6,E,D),J.quadraticCurveTo(E+3,D-6,E+7,D-3),J.stroke()}J.fillStyle="rgba(30,28,26,.88)",J.font="44px KaiTi, STKaiti, serif",J.textAlign="center";let le="\u5C71\u8272\u7A7A\u6FDB\u96E8\u4EA6\u5947";for(let P=0;P<le.length;P++)J.fillText(le[P],700,90+P*50);J.fillStyle="#b0302a",J.fillRect(680,455,40,40),J.fillStyle="#eee3c8",J.font="26px KaiTi, serif",J.fillText("\u7EA2",700,484);let ye=new Xt(te);ye.colorSpace=ft,ye.anisotropy=4,A.set("ink-base",ye)}let H=A.get("ink-base").clone();H.repeat.x=1/3,H.offset.x=Z/3,H.needsUpdate=!0,A.set("ink"+Z,new $t({map:H,roughness:.9,side:2}))}return A.get("ink"+Z)}let k=Jo(),Te=0,ge=0,Ke=0,He=!1,ie=!1;zn(k);let oe=()=>t({phase:k.phase,distance:Math.floor(k.distance),score:Yo(k),jades:k.jades,hearts:k.hearts,message:k.notice>0||k.phase==="over"?k.message:"",hurt:k.grace>0});function de(Z){if(ie)return;let H=ge?Math.min((Z-ge)/1e3,.05):0;ge=Z,tf(k,H),af(k),d.distance.value=k.distance,M.entrance.position.z=8+k.distance,M.entranceDoors.forEach(le=>{le.rotation.y=-le.userData.side*1.48}),M.entrance.visible=k.distance<45;for(let le=0;le<S.length;le++)S[le].position.z=(18-le*36+k.distance-36+S.length*72-36)%(S.length*36)-(S.length*36-36),S[le].visible=k.distance>=36||le<S.length-1;let te=new Set(k.items.filter(le=>!le.done).map(le=>le.id));for(let[le,ye]of ee)te.has(le)||(n.remove(ye),j(ye),ee.delete(le));for(let le of k.items){if(le.done)continue;let ye=ee.get(le.id)??q(le);ye.position.set(le.lane*Bn,0,4-(le.at-k.distance)),le.kind==="mooncake"&&(ye.rotation.y=Z*.002)}let J=k.phase==="running",I=J?Math.sin(k.distance*1.3):0;U.position.set(k.phase==="ready"?-1.9:k.x,k.y+(J&&k.y===0&&k.slide===0?Math.abs(I)*.055:0),4),U.rotation.y=k.phase==="ready"?.3+Math.sin(Z*5e-4)*.15:Math.PI,U.scale.set(g,g*(k.slide>0?.35:1),g),U.rotation.x=k.slide>0?-.3:k.y>0?-.12:0,U.rotation.z=(k.lane*Bn-k.x)*-.09,U.visible=k.grace===0||Math.floor(Z/90)%2==0,N.forEach((le,ye)=>{le.rotation.x=k.y>0?ye%2==0?-.6:.7:I*(ye<2?1:-1)*(ye%2==0?1:-1)*.8}),L.forEach((le,ye)=>{le.avatar.rotation.z=Math.sin(Z*.001+ye)*.015,le.limbs[0].rotation.x=Math.sin(Z*.0015+ye)*.12}),F.forEach((le,ye)=>{le.rotation.x=(J?.18:0)+Math.sin(k.distance*1.6+ye)*.12}),o+=(+(k.phase==="ready")-o)*(1-Math.exp(-H*3));let Se=e.clientWidth<600;s.position.set(k.x*.2,Ni.lerp(Se?5.2:4.7,6.4,o),Ni.lerp(Se?14.4:12.5,Se?32:28.5,o)),s.lookAt(k.x*.12,Ni.lerp(1.25,3.9,o),Ni.lerp(-18,-12,o)),k.phase==="over"&&!He&&(He=!0,i(Yo(k)),oe()),Z-Ke>100&&(Ke=Z,oe()),R(Z),v?v.render(Z):r.render(n,s),Te=requestAnimationFrame(de)}let De=()=>{let Z=e.clientWidth,H=e.clientHeight;!Z||!H||(r.setSize(Z,H),v?.size(Z,H),s.aspect=Z/H,s.fov=Z<600?65:57,s.updateProjectionMatrix())},ze=new ResizeObserver(De);ze.observe(e),De();function _e(){k.phase==="running"&&(k.phase="paused",oe())}let Ze=Z=>{let H={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"boost",w:"boost",W:"boost"," ":"jump"};if(Z.key==="ArrowDown"){Z.preventDefault();return}H[Z.key]&&(Z.preventDefault(),Z.repeat||Na(k,H[Z.key])),(Z.key==="Escape"||Z.key==="p")&&(Z.preventDefault(),_e())},ne=()=>{document.hidden&&_e()},re=null,fe=Z=>{Z.isPrimary&&(re={x:Z.clientX,y:Z.clientY,id:Z.pointerId},a.setPointerCapture(Z.pointerId),a.focus({preventScroll:!0}))},Ae=Z=>{if(!re||re.id!==Z.pointerId)return;let H=Z.clientX-re.x,te=Z.clientY-re.y;re=null,!(Math.max(Math.abs(H),Math.abs(te))<20)&&(Math.abs(H)>Math.abs(te)?Na(k,H>0?"right":"left"):te<0&&Na(k,"boost"))},Re=()=>{re=null};return a.addEventListener("keydown",Ze),a.addEventListener("pointerdown",fe),a.addEventListener("pointerup",Ae),a.addEventListener("pointercancel",Re),window.addEventListener("blur",_e),document.addEventListener("visibilitychange",ne),Te=requestAnimationFrame(de),oe(),{start:Z=>{for(let H of ee.values())n.remove(H),j(H);ee.clear(),k=Jo(Math.floor(Math.random()*4294967295)),k.phase="running",He=!1,W(0),zn(k),ge=0,oe(),a.focus({preventScroll:!0})},act:Z=>Na(k,Z),pause:_e,resume:()=>{k.phase==="paused"&&(k.phase="running",ge=0,oe(),a.focus({preventScroll:!0}))},select:Z=>{(k.phase==="ready"||k.phase==="over")&&W(Z)},dispose:()=>{ie=!0,cancelAnimationFrame(Te),ze.disconnect(),window.removeEventListener("blur",_e),document.removeEventListener("visibilitychange",ne),a.removeEventListener("keydown",Ze),a.removeEventListener("pointerdown",fe),a.removeEventListener("pointerup",Ae),a.removeEventListener("pointercancel",Re);let Z=new Set;n.traverse(H=>{if(H instanceof st){H.geometry.dispose();for(let te of Array.isArray(H.material)?H.material:[H.material])Z.add(te)}});for(let H of A.values())H.isTexture?H.dispose():Z.add(H);Z.forEach(H=>{let te=H.map;te&&(te instanceof Xt||H.userData.characterFace)&&te.dispose(),H.dispose()}),M.dispose(),d.dispose(),v?.dispose(),n.environment?.dispose(),r.dispose(),a.remove()}}}var ke=El(),sf={phase:"ready",distance:0,score:0,jades:0,hearts:3,message:"",hurt:!1};function of(){let e=(0,Ri.useRef)(null),t=(0,Ri.useRef)(null),[i,r]=(0,Ri.useState)(sf),[a,n]=(0,Ri.useState)(0),[s,o]=(0,Ri.useState)(""),[l,c]=(0,Ri.useState)(!1);(0,Ri.useEffect)(()=>{try{let M=Number(localStorage.getItem("honglou-run-best"));Number.isFinite(M)&&M>=0&&n(M)}catch{}if(e.current){try{t.current=nf(e.current,r,M=>{n(S=>{let d=Math.max(S,M);try{localStorage.setItem("honglou-run-best",String(d))}catch{}return d})}),c(!0)}catch{o("\u5F53\u524D\u8BBE\u5907\u65E0\u6CD5\u5F00\u542F\u4E09\u7EF4\u753B\u9762\uFF0C\u8BF7\u6362\u7528\u652F\u6301 WebGL \u7684\u6D4F\u89C8\u5668\u540E\u91CD\u8BD5\u3002")}return()=>{t.current?.dispose(),t.current=null}}},[]);let m=()=>{t.current?.start(0),e.current?.parentElement?.scrollIntoView({block:"start",behavior:"instant"})},x=M=>t.current?.act(M),g=jo(i.distance);return(0,ke.jsxs)("section",{className:"garden-runner","aria-label":"\u5927\u89C2\u56ED\u8DD1\u9177",children:[(0,ke.jsxs)("header",{className:"run-heading",children:[(0,ke.jsxs)("div",{children:[(0,ke.jsx)("span",{className:"eyebrow",children:"\u7EA2\u697C\u6E38\u68A6"}),(0,ke.jsx)("h2",{children:"\u5927\u89C2\u56ED\u8DD1\u9177"})]}),(0,ke.jsxs)("span",{className:"run-best",children:["\u672C\u673A\u6700\u4F73 ",(0,ke.jsx)("b",{children:a})]})]}),(0,ke.jsxs)("div",{className:"run-stage"+(i.hurt?" is-hurt":""),children:[(0,ke.jsx)("div",{ref:e,className:"run-canvas"}),(0,ke.jsxs)("div",{className:"run-hud",children:[(0,ke.jsxs)("div",{children:[(0,ke.jsx)("small",{children:g}),(0,ke.jsxs)("strong",{children:[i.distance,(0,ke.jsx)("em",{children:" \u7C73"})]})]}),(0,ke.jsxs)("div",{children:[(0,ke.jsx)("small",{children:"\u6708\u997C"}),(0,ke.jsx)("strong",{children:i.jades})]}),(0,ke.jsxs)("div",{children:[(0,ke.jsx)("small",{children:"\u5F97\u5206"}),(0,ke.jsx)("strong",{children:i.score})]}),(0,ke.jsxs)("div",{className:"run-hearts","aria-label":"\u5269\u4F59"+i.hearts+"\u6B21\u673A\u4F1A",children:["\u2665".repeat(i.hearts),(0,ke.jsx)("span",{children:"\u2661".repeat(3-i.hearts)})]}),i.phase==="running"&&(0,ke.jsx)("button",{onClick:()=>t.current?.pause(),"aria-label":"\u6682\u505C\u8DD1\u9177",children:"\u6682\u505C"})]}),i.message&&i.phase==="running"&&(0,ke.jsx)("p",{className:"run-notice",role:"status",children:i.message}),(i.phase==="ready"||i.phase==="over")&&(0,ke.jsx)("div",{className:"run-cover"+(i.phase==="ready"?" run-cover-ready":""),children:(0,ke.jsxs)("div",{className:"run-card",children:[(0,ke.jsx)("span",{className:"eyebrow",children:i.phase==="over"?"\u8FD9\u4E00\u7A0B\uFF0C\u6682\u6B47\u811A":"\u8D3E\u5B9D\u7389\u4E0E\u91D1\u9675\u5341\u4E8C\u9497"}),(0,ke.jsx)("h3",{children:i.phase==="over"?"\u518D\u95EF\u82B3\u56ED":"\u82B1\u5F84\u75BE\u884C"}),i.phase==="over"?(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsxs)("p",{className:"run-result",children:[i.score,(0,ke.jsxs)("small",{children:[" \u5206 \xB7 ",i.distance," \u7C73 \xB7 ",i.jades," \u679A\u6708\u997C"]})]}),(0,ke.jsx)("p",{children:i.message})]}):(0,ke.jsx)("p",{children:"\u4ECE\u5927\u89C2\u56ED\u95E8\u5185\u51FA\u53D1\uFF0C\u6CBF\u66F2\u5F84\u6E38\u5386\u5341\u4E09\u5904\u56ED\u666F\u3002"}),(0,ke.jsx)("button",{className:"primary run-start",disabled:!l||!!s,onClick:m,children:s?"\u4E09\u7EF4\u753B\u9762\u4E0D\u53EF\u7528":l?i.phase==="over"?"\u518D\u8DD1\u4E00\u6B21":"\u5F00\u59CB\u8DD1\u9177":"\u56ED\u666F\u51C6\u5907\u4E2D\u2026"}),(0,ke.jsxs)("div",{className:"run-selected",children:[(0,ke.jsx)(Al,{id:"baoyu"}),(0,ke.jsxs)("div",{children:[(0,ke.jsx)("b",{children:"\u8D3E\u5B9D\u7389"}),(0,ke.jsx)("span",{children:"\u6CBF\u9014\u5341\u4E09\u666F\uFF0C\u5404\u5728\u5176\u5904\u9082\u9005\u91D1\u9675\u5341\u4E8C\u9497"})]})]}),(0,ke.jsxs)("p",{className:"run-rules",children:["\u5C71\u77F3\uFF1A\u8DF3\u8DC3 \xB7 \u5C4F\u98CE\uFF1A\u6362\u9053 \xB7 \u2191 \u52A0\u901F",(0,ke.jsx)("br",{}),"\u7A7A\u4E2D\u6708\u997C\u9700\u8DF3\u8DC3\u62FE\u53D6 \xB7 \u6BCF\u679A\u52A0 25 \u5206"]})]})}),i.phase==="paused"&&(0,ke.jsx)("div",{className:"run-cover",children:(0,ke.jsxs)("div",{className:"run-card run-pause",children:[(0,ke.jsx)("h3",{children:"\u6B47\u4E00\u6B47"}),(0,ke.jsxs)("p",{children:["\u5DF2\u8DD1 ",i.distance," \u7C73\uFF0C\u7EE7\u7EED\u8FD9\u4E00\u7A0B\u3002"]}),(0,ke.jsx)("button",{className:"primary",onClick:()=>t.current?.resume(),children:"\u7EE7\u7EED\u8DD1\u9177"}),(0,ke.jsx)("button",{className:"secondary",onClick:m,children:"\u91CD\u65B0\u5F00\u59CB"})]})}),s&&(0,ke.jsx)("p",{className:"run-error",role:"alert",children:s}),i.phase==="running"&&(0,ke.jsx)("div",{className:"run-controls",children:[["left","\u5DE6\u79FB"],["jump","\u8DF3\u8DC3"],["boost","\u52A0\u901F"],["right","\u53F3\u79FB"]].map(([M,S])=>(0,ke.jsx)("button",{onPointerDown:d=>{d.preventDefault(),x(M)},onClick:d=>{d.detail===0&&x(M)},"aria-label":S,children:S},M))})]}),(0,ke.jsx)("p",{className:"run-help",children:"\u7535\u8111\uFF1A\u2190 \u2192 \u6362\u9053\uFF0C\u2191 \u52A0\u901F\uFF0C\u7A7A\u683C\u8DF3\u8DC3\uFF0CEsc \u6682\u505C\u3002\u624B\u673A\uFF1A\u5DE6\u53F3\u6ED1\u52A8\u6362\u9053\uFF0C\u4E0A\u6ED1\u52A0\u901F\uFF0C\u70B9\u51FB\u8DF3\u8DC3\u6309\u94AE\u8D77\u8DF3\u3002\u5F2F\u9053\u81EA\u52A8\u8F6C\u5411\uFF0C\u79BB\u5F00\u7A97\u53E3\u81EA\u52A8\u6682\u505C\u3002"})]})}export{of as default};
