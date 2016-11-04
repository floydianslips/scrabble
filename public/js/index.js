// Generated by js_of_ocaml 2.8.2
(function(m){"use strict";var
aQ=254,aA="Sys_error",aO=2147483647,aP=224,aN="Invalid_argument",aM=250,v=1024,aL="jsError",az=57343,D=512,aK="End_of_file",aJ="Failure",ay="Undefined_recursive_module",aI="Stack_overflow",f=128,c="",Q=" : file already exists",av=56320,aw=240,ax=2048,e=248,aH="Not_found",at="Assert_failure",au="/",aF="Sys_blocked_io",aG="fd ",as="Out_of_memory",aE="Match_failure",aC=">",aD="Division_by_zero",aB=1e3;function
X(d,e,c){var
b=new
Array(c);for(var
a=0;a<c;a++)b[a]=d[e+a];return b}function
W(b,d,a){var
e=String.fromCharCode;if(d==0&&a<=4096&&a==b.length)return e.apply(null,b);var
f=c;for(;0<a;d+=v,a-=v)f+=e.apply(null,X(b,d,Math.min(a,v)));return f}function
S(b){if(m.Uint8Array)var
c=new(m.Uint8Array)(b.l);else
var
c=new
Array(b.l);var
e=b.c,d=e.length,a=0;for(;a<d;a++)c[a]=e.charCodeAt(a);for(d=b.l;a<d;a++)c[a]=0;b.c=c;b.t=4;return c}function
r(d,e,b,f,c){if(c==0)return 0;if(f==0&&(c>=b.l||b.t==2&&c>=b.c.length)){b.c=d.t==4?W(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else
if(b.t==2&&f==b.c.length){b.c+=d.t==4?W(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else{if(b.t!=4)S(b);var
g=d.c,h=b.c;if(d.t==4)if(f<=e)for(var
a=0;a<c;a++)h[f+a]=g[e+a];else
for(var
a=c-1;a>=0;a--)h[f+a]=g[e+a];else{var
i=Math.min(c,g.length-e);for(var
a=0;a<i;a++)h[f+a]=g.charCodeAt(e+a);for(;a<c;a++)h[f+a]=0}}return 0}function
bZ(c,e){var
d=c.length,b=new
Array(d+1),a=0;for(;a<d;a++)b[a]=c[a];b[a]=e;return b}function
w(b,a){if(b.fun)return w(b.fun,a);var
c=b.length,d=a.length,e=c-d;if(e==0)return b.apply(null,a);else
if(e<0)return w(b.apply(null,X(a,0,c)),X(a,c,d-c));else
return function(c){return w(b,bZ(a,c))}}function
aX(b,a){if(a.repeat)return a.repeat(b);var
d=c,e=0;if(b==0)return d;for(;;){if(b&1)d+=a;b>>=1;if(b==0)return d;a+=a;e++;if(e==9)a.slice(0,1)}}function
E(a){if(a.t==2)a.c+=aX(a.l-a.c.length,"\0");else
a.c=W(a.c,0,a.c.length);a.t=0}function
aR(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>127)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
bV(g){for(var
l=c,d=c,i,h,j,a,b=0,k=g.length;b<k;b++){h=g.charCodeAt(b);if(h<f){for(var
e=b+1;e<k&&(h=g.charCodeAt(e))<f;e++);if(e-b>D){d.substr(0,1);l+=d;d=c;l+=g.slice(b,e)}else
d+=g.slice(b,e);if(e==k)break;b=e}a=1;if(++b<k&&((j=g.charCodeAt(b))&-64)==f){i=j+(h<<6);if(h<aP){a=i-12416;if(a<f)a=1}else{a=2;if(++b<k&&((j=g.charCodeAt(b))&-64)==f){i=j+(i<<6);if(h<aw){a=i-925824;if(a<ax||a>=55295&&a<57344)a=2}else{a=3;if(++b<k&&((j=g.charCodeAt(b))&-64)==f&&h<245){a=j-63447168+(i<<6);if(a<65536||a>1114111)a=3}}}}}if(a<4){b-=a;d+="\ufffd"}else
if(a>65535)d+=String.fromCharCode(55232+(a>>10),av+(a&1023));else
d+=String.fromCharCode(a);if(d.length>v){d.substr(0,1);l+=d;d=c}}return l+d}function
bU(a){switch(a.t){case
9:return a.c;default:E(a);case
0:if(aR(a.c)){a.t=9;return a.c}a.t=8;case
8:return bV(a.c)}}function
i(c,a,b){this.t=c;this.c=a;this.l=b}i.prototype.toString=function(){return bU(this)};function
bM(b,a){throw[0,b,a]}function
b(a){return new
i(0,a,a.length)}function
aV(c,a){bM(c,b(a))}var
d=[0];function
F(a){aV(d.Invalid_argument,a)}function
k(a){if(a<0)F("String.create");return new
i(a?2:9,c,a)}function
bz(a,d,b,e){if(b>0)if(d==0&&(b>=a.l||a.t==2&&b>=a.c.length))if(e==0){a.c=c;a.t=2}else{a.c=aX(b,String.fromCharCode(e));a.t=b==a.l?0:2}else{if(a.t!=4)S(a);for(b+=d;d<b;d++)a.c[d]=e}return 0}var
bL=0;function
s(){return bL++}function
bC(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
bD(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
bP(a,b){a.t&6&&E(a);b.t&6&&E(b);return a.c<b.c?-1:a.c>b.c?1:0}function
R(a,b,h){var
d=[];for(;;){if(!(h&&a===b))if(a
instanceof
i)if(b
instanceof
i){if(a!==b){var
c=bP(a,b);if(c!=0)return c}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
e=a[0];if(e===aQ)e=0;if(e===aM){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
f=b[0];if(f===aQ)f=0;if(f===aM){b=b[1];continue}else
if(e!=f)return e<f?-1:1;else
switch(e){case
248:var
c=bD(a[2],b[2]);if(c!=0)return c;break;case
251:F("equal: abstract value");case
255:var
c=bC(a,b);if(c!=0)return c;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)d.push(a,b,1)}}else
return 1}else
if(b
instanceof
i||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!="number"&&a&&a.compare)return a.compare(b,h);else
if(typeof
a=="function")F("equal: functional value");else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!h)return NaN;if(a==a)return 1;if(b==b)return-1}}if(d.length==0)return 0;var
g=d.pop();b=d.pop();a=d.pop();if(g+1<a.length)d.push(a,b,g+1);a=a[g];b=b[g]}}function
bB(a,b){return+(R(a,b,false)>=0)}function
bW(g){for(var
h=c,b=h,a,j,d=0,i=g.length;d<i;d++){a=g.charCodeAt(d);if(a<f){for(var
e=d+1;e<i&&(a=g.charCodeAt(e))<f;e++);if(e-d>D){b.substr(0,1);h+=b;b=c;h+=g.slice(d,e)}else
b+=g.slice(d,e);if(e==i)break;d=e}if(a<ax){b+=String.fromCharCode(192|a>>6);b+=String.fromCharCode(f|a&63)}else
if(a<55296||a>=az)b+=String.fromCharCode(aP|a>>12,f|a>>6&63,f|a&63);else
if(a>=56319||d+1==i||(j=g.charCodeAt(d+1))<av||j>az)b+="\xef\xbf\xbd";else{d++;a=(a<<10)+j-56613888;b+=String.fromCharCode(aw|a>>18,f|a>>12&63,f|a>>6&63,f|a&63)}if(b.length>v){b.substr(0,1);h+=b;b=c}}return h+b}function
U(a){var
b=9;if(!aR(a))b=8,a=bW(a);return new
i(b,a,a.length)}function
bE(a,b){return+(R(a,b,false)<=0)}function
bF(a,b){return+(R(a,b,false)<0)}function
l(a){aV(d.Sys_error,a)}function
V(a){if(!a.opened)l("Cannot flush a closed channel");if(a.buffer==c)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=c;return 0}var
aZ=0;function
b0(){return new
Date().getTime()/aB}function
Y(){return Math.floor(b0())}function
n(b){this.data=b;this.inode=aZ++;var
a=Y();this.atime=a;this.mtime=a;this.ctime=a}n.prototype={truncate:function(){this.data=k(0);this.modified()},modified:function(){var
a=Y();this.atime=a;this.mtime=a}};function
g(a){return a.l}function
aU(a){a=a
instanceof
i?a.toString():a;l(a+": No such file or directory")}var
by=au;function
G(a){a=a
instanceof
i?a.toString():a;if(a.charCodeAt(0)!=47)a=by+a;var
e=a.split(au),b=[];for(var
d=0;d<e.length;d++)switch(e[d]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(c);break;default:b.push(e[d]);break}b.orig=a;return b}function
q(){this.content={};this.inode=aZ++;var
a=Y();this.atime=a;this.mtime=a;this.ctime=a}q.prototype={exists:function(a){return this.content[a]?1:0},mk:function(b,a){this.content[b]=a},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
H=new
q();H.mk(c,new
q());function
T(c){var
a=H;for(var
b=0;b<c.length;b++){if(!(a.exists&&a.exists(c[b])))aU(c.orig);a=a.get(c[b])}return a}function
bT(b){var
c=G(b),a=T(c);return a
instanceof
q?1:0}function
bQ(a){return new
i(4,a,a.length)}function
b1(a){if(a.t!=4)S(a);return a.c}function
bA(h,c){var
e=G(h),a=H;for(var
f=0;f<e.length-1;f++){var
d=e[f];if(!a.exists(d))a.mk(d,new
q());a=a.get(d);if(!(a
instanceof
q))l(e.orig+Q)}var
d=e[e.length-1];if(a.exists(d))l(e.orig+Q);if(c
instanceof
q)a.mk(d,c);else
if(c
instanceof
n)a.mk(d,c);else
if(c
instanceof
i)a.mk(d,new
n(c));else
if(c
instanceof
Array)a.mk(d,new
n(bQ(c)));else
if(c.toString){var
g=b(c.toString());a.mk(d,new
n(g))}else
F("caml_fs_register");return 0}function
bS(f){var
a=H,c=G(f),d,e;for(var
b=0;b<c.length;b++){if(a.auto){d=a.auto;e=b}if(!(a.exists&&a.exists(c[b])))return d?d(c,e):0;a=a.get(c[b])}return 1}function
y(c,e,a){if(d.fds===undefined)d.fds=new
Array();a=a?a:{};var
b={};b.file=e;b.offset=a.append?g(e.data):0;b.flags=a;d.fds[c]=b;d.fd_last_idx=c;return c}function
b2(b,e,i){var
a={};while(e){switch(e[1]){case
0:a.rdonly=1;break;case
1:a.wronly=1;break;case
2:a.append=1;break;case
3:a.create=1;break;case
4:a.truncate=1;break;case
5:a.excl=1;break;case
6:a.binary=1;break;case
7:a.text=1;break;case
8:a.nonblock=1;break}e=e[2]}var
f=b.toString(),h=G(b);if(a.rdonly&&a.wronly)l(f+" : flags Open_rdonly and Open_wronly are not compatible");if(a.text&&a.binary)l(f+" : flags Open_text and Open_binary are not compatible");if(bS(b)){if(bT(b))l(f+" : is a directory");if(a.create&&a.excl)l(f+Q);var
g=d.fd_last_idx?d.fd_last_idx:0,c=T(h);if(a.truncate)c.truncate();return y(g+1,c,a)}else
if(a.create){var
g=d.fd_last_idx?d.fd_last_idx:0;bA(b,k(0));var
c=T(h);return y(g+1,c,a)}else
aU(b)}y(0,new
n(k(0)));y(1,new
n(k(0)));y(2,new
n(k(0)));function
bG(b){var
a=d.fds[b];if(a.flags.wronly)l(aG+b+" is writeonly");return{file:a.file,offset:a.offset,fd:b,opened:true,refill:null}}function
bX(a){var
b=m;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stderr.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.error&&c.error(a)}}function
bY(a){var
b=m;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stdout.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.log&&c.log(a)}}var
x=new
Array();function
bO(a,i){var
h=b(i),c=g(h),f=g(a.file.data),e=a.offset;if(e+c>=f){var
d=k(e+c);r(a.file.data,0,d,0,f);r(h,0,d,e,c);a.file.data=d}a.offset+=c;a.file.modified();return 0}function
aS(a){var
b;switch(a){case
1:b=bY;break;case
2:b=bX;break;default:b=bO}var
f=d.fds[a];if(f.flags.rdonly)l(aG+a+" is readonly");var
e={file:f.file,offset:f.offset,fd:a,opened:true,buffer:c,output:b};x[e.fd]=e;return e}function
bH(){var
b=0;for(var
a=0;a<x.length;a++)if(x[a]&&x[a].opened)b=[0,x[a],b];return b}function
bI(a,d,h,f){if(!a.opened)l("Cannot output to a closed channel");var
c;if(h==0&&g(d)==f)c=d;else{c=k(f);r(d,h,c,0,f)}var
b=c.toString(),e=b.lastIndexOf("\n");if(e<0)a.buffer+=b;else{a.buffer+=b.substr(0,e+1);V(a);a.buffer+=b.substr(e+1)}return 0}function
bK(a){return a
instanceof
Array?a[0]:a
instanceof
i?252:aB}function
j(c,b,a){d[c+1]=b;if(a)d[a]=b}var
aT={};function
bx(a){if((a.t&6)!=0)E(a);return a.c}function
bN(a,b){aT[bx(a)]=b;return 0}function
bR(){return aO/4|0}function
aW(a){return a}function
bJ(a){return aT[a]}function
aY(a){if(a
instanceof
Array)return a;if(m.RangeError&&a
instanceof
m.RangeError&&a.message&&a.message.match(/maximum call stack/i))return aW(d.Stack_overflow);if(m.InternalError&&a
instanceof
m.InternalError&&a.message&&a.message.match(/too much recursion/i))return aW(d.Stack_overflow);if(a
instanceof
m.Error)return[0,bJ(aL),a];return[0,d.Failure,U(String(a))]}function
p(a,b){return a.length==1?a(b):w(a,[b])}function
C(a,b,c,d){return a.length==3?a(b,c,d):w(a,[b,c,d])}var
Z=[e,b(aJ),-3],_=[e,b(aN),-4],J=[e,b(aH),-7],$=[e,b(at),-11];j(11,[e,b(ay),-12],ay);j(10,$,at);j(9,[e,b(aF),-10],aF);j(8,[e,b(aI),-9],aI);j(7,[e,b(aE),-8],aE);j(6,J,aH);j(5,[e,b(aD),-6],aD);j(4,[e,b(aK),-5],aK);j(3,_,aN);j(2,Z,aJ);j(1,[e,b(aA),-2],aA);j(0,[e,b(as),-1],as);var
a3=b("output_substring"),a6=b("String.blit / Bytes.blit_string"),a5=b("Bytes.blit"),a8=b("Buffer.add_substring/add_subbytes"),a7=b("Buffer.add: cannot grow buffer"),bm=[3,0,3],bn=b("."),bi=b(aC),bj=b("</"),bf=b(aC),bg=b("<"),bd=b("\n"),a9=b("Format.Empty_queue"),bc=[0,b(c)],bu=b("Js.Error"),bw=[0,b("index.ml"),8,90];function
z(a){throw[0,_,a]}s(0);var
a0=aO;function
A(d,c){var
a=g(d),e=g(c),b=k(a+e|0);r(d,0,b,0,a);r(c,0,b,a,e);return b}bG(0);var
a1=aS(1),a2=aS(2),I=[0,function(b){function
a(b){var
a=b;for(;;){if(a){var
c=a[2],d=a[1];try{V(d)}catch(a){}var
a=c;continue}return 0}}return a(bH(0))}],u=(4*bR(0)|0)-1|0;s(0);s(0);s(0);var
ac=[0,0];function
ad(a){ac[1]=[0,a,ac[1]];return 0}function
ae(d,a){var
b=[0,[0,d,0]],c=a[1];if(c){var
e=c[1];a[1]=b;e[2]=b;return 0}a[1]=b;a[2]=b;return 0}var
L=[e,a9,s(0)];function
af(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1];a[2]=d;if(0===d)a[1]=0;return e}throw L}function
M(a,b){a[13]=a[13]+b[3]|0;return ae(b,a[27])}var
ag=1000000010;function
N(b,a){return C(b[17],a,0,g(a))}function
O(a){return p(a[19],0)}function
ah(b,a){return p(b[20],a)}function
o(a,e,d){O(a);a[11]=1;var
b=(a[6]-d|0)+e|0,c=a[8],f=bE(c,b)?c:b;a[10]=f;a[9]=a[6]-a[10]|0;return ah(a,a[10])}function
ai(b,a){return o(b,0,a)}function
t(a,b){a[9]=a[9]-b|0;return ah(a,b)}function
a_(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1],f=a[9]<d?1:0;if(f){if(0!==e)return 5<=e?0:ai(a,d);var
g=0}else
var
g=f;return g}return O(a)}function
a$(a){var
b=af(a[27]),c=b[1];a[12]=a[12]-b[3]|0;a[9]=a[9]+c|0;return 0}function
ba(a,f,b){if(typeof
b==="number")switch(b){case
0:var
j=a[3];if(j){var
k=j[1][1],l=function(b,a){if(a){var
c=a[1],d=a[2];return bF(b,c)?[0,b,a]:[0,c,l(b,d)]}return[0,b,0]};k[1]=l(a[6]-a[9]|0,k[1]);return 0}return 0;case
1:var
m=a[2];return m?(a[2]=m[2],0):0;case
2:var
n=a[3];return n?(a[3]=n[2],0):0;case
3:var
q=a[2];return q?ai(a,q[1][2]):O(a);case
4:var
r=a[10]!==(a[6]-a[9]|0)?1:0;return r?a$(a):r;default:var
g=a[5];if(g){var
C=g[2];N(a,p(a[24],g[1]));a[5]=C;return 0}return 0}else
switch(b[0]){case
0:var
D=b[1];a[9]=a[9]-f|0;N(a,D);a[11]=0;return 0;case
1:var
c=b[2],e=b[1],s=a[2];if(s){var
u=s[1],d=u[2];switch(u[1]){case
0:return t(a,e);case
1:return o(a,c,d);case
2:return o(a,c,d);case
3:return a[9]<f?o(a,c,d):t(a,e);case
4:return a[11]?t(a,e):a[9]<f?o(a,c,d):((a[6]-d|0)+c|0)<a[10]?o(a,c,d):t(a,e);default:return t(a,e)}}return 0;case
2:var
h=a[6]-a[9]|0,v=a[3],E=b[2],F=b[1];if(v){var
w=v[1][1],G=function(d,c){var
a=c;for(;;){if(a){var
b=a[1],e=a[2];if(bB(b,d))return b;var
a=e;continue}throw J}},x=w[1];if(x){var
H=x[1];try{var
I=G(h,w[1]),y=I}catch(a){a=aY(a);if(a!==J)throw a;var
y=H}var
i=y}else
var
i=h;var
z=i-h|0;return 0<=z?t(a,z+F|0):o(a,i+E|0,a[6])}return 0;case
3:var
A=b[2],K=b[1];if(a[8]<(a[6]-a[9]|0))a_(a);var
L=a[9]-K|0,M=1===A?1:a[9]<f?A:5;a[2]=[0,[0,M,L],a[2]];return 0;case
4:a[3]=[0,b[1],a[3]];return 0;default:var
B=b[1];N(a,p(a[23],B));a[5]=[0,B,a[5]];return 0}}function
bb(a){for(;;){var
d=a[27][2];if(d){var
b=d[1][1],c=b[1],e=c<0?1:0,g=b[3],h=b[2],i=e?(a[13]-a[12]|0)<a[9]?1:0:e,f=1-i;if(f){af(a[27]);var
j=0<=c?c:ag;ba(a,j,h);a[12]=g+a[12]|0;continue}return f}throw L}}function
aj(a){try{var
b=bb(a);return b}catch(a){a=aY(a);if(a===L)return 0;throw a}}var
ak=[0,[0,-1,[0,-1,bc,0]],0];function
al(a){a[1]=ak;return 0}function
am(a,c){var
d=a[1];if(d){var
e=d[1],b=e[2],f=b[1],g=d[2],h=b[2];if(e[1]<a[12])return al(a);if(typeof
h!=="number")switch(h[0]){case
3:var
i=1-c,k=i?(b[1]=a[13]+f|0,a[1]=g,0):i;return k;case
1:case
2:var
j=c?(b[1]=a[13]+f|0,a[1]=g,0):c;return j}return 0}return 0}var
K=k(80);bz(K,0,80,32);function
be(a){return A(bg,A(a,bf))}function
bh(a){return A(bj,A(a,bi))}function
bk(a){return 0}function
bl(a){return 0}function
an(e,d){function
f(a){return 0}var
b=[0,0,0],c=[0,-1,bm,0];function
g(a){return 0}ae(c,b);var
a=[0,[0,[0,1,c],ak],0,0,0,0,78,10,68,78,0,1,1,1,1,a0,bn,e,d,g,f,0,0,be,bh,bk,bl,b];a[19]=function(b){return C(a[17],bd,0,1)};a[20]=function(d){var
b=d;for(;;){var
c=0<b?1:0;if(c){if(80<b){C(a[17],K,0,80);var
b=b-80|0;continue}return C(a[17],K,0,b)}return c}};return a}function
ao(c){function
a(a){return V(c)}return an(function(d,a,b){if(0<=a)if(0<=b)if(!((g(d)-b|0)<a))return bI(c,d,a,b);return z(a3)},a)}var
bp=D,aa=u<D?u:bp,ab=k(aa),h=[0,ab,0,aa,ab],a=ao(a1);ao(a2);function
bo(a){return 0}an(function(i,c,a){var
l=c<0?1:0;if(l)var
m=l;else
var
p=a<0?1:0,m=p||(g(i)<(c+a|0)?1:0);if(m)z(a8);var
n=h[2]+a|0;if(h[3]<n){var
b=[0,h[3]];for(;;){if(b[1]<(h[2]+a|0)){b[1]=2*b[1]|0;continue}if(u<b[1]){if(!((h[2]+a|0)<=u))throw[0,Z,a7];b[1]=u}var
e=k(b[1]),d=h[2],j=h[1],q=0<=d?(g(j)-d|0)<0?0:(g(e)-d|0)<0?0:(r(j,0,e,0,d),1):0;if(!q)z(a5);h[1]=e;h[3]=b[1];break}}var
f=h[2],o=h[1],s=0<=a?0<=c?(g(i)-a|0)<c?0:0<=f?(g(o)-a|0)<f?0:(r(i,c,o,f,a),1):0:0:0;if(!s)z(a6);h[2]=n;return 0},bo);var
a4=I[1];I[1]=function(i){for(;;){if(1<a[14]){if(1<a[14]){if(a[14]<a[15]){M(a,[0,0,1,0]);am(a,1);am(a,0)}a[14]=a[14]-1|0}continue}a[13]=ag;aj(a);a[12]=1;a[13]=1;var
b=a[27];b[1]=0;b[2]=0;al(a);a[2]=0;a[3]=0;a[4]=0;a[5]=0;a[10]=0;a[14]=0;a[9]=a[6];a[14]=a[14]+1|0;var
f=3,h=0;if(a[14]<a[15]){var
d=[0,-a[13]|0,[3,h,f],0];M(a,d);a[1]=[0,[0,a[13],d],a[1]]}else
if(a[14]===a[15]){var
e=a[16],c=g(e);M(a,[0,c,[0,e],c]);aj(a)}p(a[18],0);return p(a4,0)}};var
B=m,ap=null,bt=B.Array,aq=[e,bu,s(0)],P=[0,aq,{}],br=undefined,bs=false,bq=bK(P)===e?P:P[1];bN(b(aL),bq);(function(a){throw a});ad(function(a){return a[1]===aq?[0,U(a[2].toString())]:0});ad(function(a){return a
instanceof
bt?0:[0,U(a.toString())]});var
bv=B.document;s(0);B.HTMLElement===br;function
ar(a){if(bv.getElementById("body")==ap)throw[0,$,bw];return bs}B.onload=function(a){if(1-(a==ap?1:0)){var
c=ar(a);if(!(c|0))a.preventDefault();return c}var
d=event,b=ar(d);if(!(b|0))d.returnValue=b;return b};p(I[1],0);return}(function(){return this}()));