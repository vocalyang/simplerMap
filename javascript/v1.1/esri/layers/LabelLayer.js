// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.11/esri/copyright.txt for details.
//>>built
require({cache:{"esri/layers/labelLayerUtils/DynamicLabelClass":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/has dojox/gfx/_base ../../kernel ../../lang ../../SpatialReference ../GraphicsLayer ../LabelClass ../../renderers/SimpleRenderer ../../geometry/Geometry ../../geometry/Extent ../../geometry/Point ../../geometry/Polyline ../../geometry/Polygon ../../symbols/TextSymbol ../../symbols/ShieldLabelSymbol ../../symbols/SimpleLineSymbol".split(" "),function(x,E,z,F,
J,C,K,H,G,I,L,M,B,N,D,A,O,P,Q){x=x(G,{declaredClass:"esri.layers.labelLayerUtils.DynamicLabelClass",constructor:function(){this._preparedLabels=[];this._placedLabels=[];this._extent=null;this._y1=this._x1=this._y0=this._x0=this._ymax=this._ymin=this._xmax=this._xmin=0;this._scale=1},setMap:function(f,d){this._labelLayer=d;this._xmin=f.extent.xmin;this._xmax=f.extent.xmax;this._ymin=f.extent.ymin;this._ymax=f.extent.ymax;this._scale=(this._xmax-this._xmin)/f.width},_process:function(f){this._preparedLabels=
f;this._placedLabels=[];var d;for(f=this._preparedLabels.length-1;0<=f;f--){var a=this._preparedLabels[f],e=Math.min(a.labelWidth,a.labelHeight),b=a.labelWidth+0*e,e=a.labelHeight+0*e,c=(d=a.options)&&void 0!==d.lineLabelPlacement?d.lineLabelPlacement:"PlaceAtCenter",h=d&&void 0!==d.lineLabelPosition?d.lineLabelPosition:"Above",g=d&&void 0!==d.pointPriorities?d.pointPriorities:"AboveRight",l=[2,2,1,3,0,2,3,3,2];"AboveLeft"==g?l=[1,2,2,2,0,3,2,3,3]:"AboveCenter"==g?l=[2,1,2,2,0,2,3,3,3]:"AboveRight"==
g?l=[2,2,1,3,0,2,3,3,2]:"CenterLeft"==g?l=[2,2,3,1,0,3,2,2,3]:"CenterCenter"==g?l=[0,0,0,0,1,0,0,0,0]:"CenterRight"==g?l=[3,2,2,3,0,1,3,2,2]:"BelowLeft"==g?l=[2,3,3,2,0,3,1,2,2]:"BelowCenter"==g?l=[3,3,3,2,0,2,2,1,2]:"BelowRight"==g&&(l=[3,3,2,3,0,2,2,2,1]);var k=d&&void 0!==d.labelRotation?d.labelRotation:!0,g=a.angle*(Math.PI/180);d=d&&void 0!==d.howManyLabels?d.howManyLabels:"OneLabel";if("point"==a.geometry.type)this._generatePointPositions(a,a.geometry.x,a.geometry.y,a.text,g,b,e,a.symbolWidth,
a.symbolHeight,l);else if("multipoint"==a.geometry.type){c=a.geometry;for(h=0;h<c.points.length;h++)this._generatePointPositions(a,c.points[h][0],c.points[h][1],a.text,g,b,e,a.symbolWidth,a.symbolHeight,l)}else"polyline"==a.geometry.type?this._generateLinePositions(a,a.geometry,a.text,b,e,2*a.symbolHeight+e,c,h,k):"polygon"==a.geometry.type&&this._generatePolygonPositions(a,d,a.geometry,a.text,g,b,e)}return this._placedLabels},_generatePointPositions:function(f,d,a,e,b,c,h,g,l,k){g=(g+c)*this._scale;
l=(l+h)*this._scale;var m,n;for(m=1;3>=m;m++)for(n=1;9>=n;n++)if(k[n-1]==m)switch(n){case 1:if(this._findPlace(f,e,d-g,a+l,b,c,h))return;break;case 2:if(this._findPlace(f,e,d,a+l,b,c,h))return;break;case 3:if(this._findPlace(f,e,d+g,a+l,b,c,h))return;break;case 4:if(this._findPlace(f,e,d-g,a,b,c,h))return;break;case 5:if(this._findPlace(f,e,d,a,b,c,h))return;break;case 6:if(this._findPlace(f,e,d+g,a,b,c,h))return;break;case 7:if(this._findPlace(f,e,d-g,a-l,b,c,h))return;break;case 8:if(this._findPlace(f,
e,d,a-l,b,c,h))return;break;case 9:if(this._findPlace(f,e,d+g,a-l,b,c,h))return}},_generateLinePositions:function(f,d,a,e,b,c,h,g,l){var k=e*this._scale*e*this._scale,m,n,p;for(m=0;m<d.paths.length;m++){var t=d.paths[m],s=t.length,r=Math.floor((s-1)/2),q=0!==(s-1)%2?1:-1;"PlaceAtStart"==h&&(r=0,q=1);"PlaceAtEnd"==h&&(r=s-2,q=-1);for(;0<=r&&r<s-1;){for(n=r;n<s;n++){var u=t[r][0],v=t[r][1],y=t[n][0]-u,w=t[n][1]-v;if(y*y+w*w>k){for(var x=Math.atan2(w,y);x>Math.PI/2;)x-=Math.PI;for(;x<-(Math.PI/2);)x+=
Math.PI;var z=Math.sin(x),B=Math.cos(x),A=0,C=0;"Above"==g&&(A=c*z*this._scale,C=c*B*this._scale);"Below"==g&&(A=-c*z*this._scale,C=-c*B*this._scale);if(1==n-r){if(this._clipLine(u,v,t[n][0],t[n][1])&&(u=this._x1-this._x0,p=this._y1-this._y0,u*u+p*p>k&&(n=Math.atan2(p,u),y=e/2+2*b,v=y*this._scale*Math.cos(n),y=y*this._scale*Math.sin(n),"PlaceAtStart"==h?(u=this._x0+v,p=this._y0+y):"PlaceAtEnd"==h?(u=this._x1-v,p=this._y1-y):(u=this._x0+u/2,p=this._y0+p/2),this._findPlace(f,a,u-A,p+C,l?-n:0,e,b))))return}else{var D=
0;for(p=r;p<=n;p++)D=Math.max(D,Math.abs((t[p][1]-v)*B-(t[p][0]-u)*z));if(D<b&&this._findPlace(f,a,u+y/2-A,v+w/2+C,l?-x:0,e,b))return}break}}r+=q}}},_generatePolygonPositions:function(f,d,a,e,b,c,h){var g;if("ManyLabels"==d)for(d=0;d<a.rings.length;d++)g=a.rings[d],A.prototype.isClockwise(g)&&(g=this._findCentroid(g,this._xmin,this._ymin,this._xmax,this._ymax),this._findPlace(f,e,g[0],g[1],b,c,h));else{g=this._findCentroidForFeature(a,this._xmin,this._ymin,this._xmax,this._ymax);var l=g[1],k=0;for(d=
0;10>d;d++){k+=h/4;g=this._findCentroidForFeature(a,this._xmin,l+(k-h/4),this._xmax,l+(k+h/4));if(this._findPlace(f,e,g[0],g[1],b,c,h))break;g=this._findCentroidForFeature(a,this._xmin,l-(k+h/4),this._xmax,l-(k-h/4));if(this._findPlace(f,e,g[0],g[1],b,c,h))break}}},_findCentroid:function(f,d,a,e,b){var c=f.length,h=[0,0],g=0,l=f[0][0],k=f[0][1];l>e&&(l=e);l<d&&(l=d);k>b&&(k=b);k<a&&(k=a);for(var m=1;m<c-1;m++){var n=f[m][0],p=f[m][1],t=f[m+1][0],s=f[m+1][1];n>e&&(n=e);n<d&&(n=d);p>b&&(p=b);p<a&&(p=
a);t>e&&(t=e);t<d&&(t=d);s>b&&(s=b);s<a&&(s=a);var r=(n-l)*(s-k)-(t-l)*(p-k);h[0]+=r*(l+n+t);h[1]+=r*(k+p+s);g+=r}h[0]/=3*g;h[1]/=3*g;if(isNaN(h[0])||isNaN(h[1]))return h;a=[];this._fillBuffer(f,a,h);h[0]=this._sortBuffer(a,h[0],d,e);return h},_findCentroidForFeature:function(f,d,a,e,b){for(var c,h=0,g=[0,0],l=0;l<f.rings.length;l++){var k=f.rings[l],m=k.length,n=k[0][0],p=k[0][1];n>e&&(n=e);n<d&&(n=d);p>b&&(p=b);p<a&&(p=a);for(c=1;c<m-1;c++){var t=k[c][0],s=k[c][1],r=k[c+1][0],q=k[c+1][1];t>e&&(t=
e);t<d&&(t=d);s>b&&(s=b);s<a&&(s=a);r>e&&(r=e);r<d&&(r=d);q>b&&(q=b);q<a&&(q=a);var u=(t-n)*(q-p)-(r-n)*(s-p);g[0]+=u*(n+t+r);g[1]+=u*(p+s+q);h+=u}}g[0]/=3*h;g[1]/=3*h;if(isNaN(g[0])||isNaN(g[1]))return g;a=[];for(c=0;c<f.rings.length;c++)this._fillBuffer(f.rings[c],a,g);g[0]=this._sortBuffer(a,g[0],d,e);return g},_fillBuffer:function(f,d,a){for(var e=f.length-1,b=f[0][1]>=f[e][1]?1:-1,c=0;c<=e;c++){var h=c,g=c+1;c==e&&(g=0);var l=f[h][0],h=f[h][1],k=f[g][0],g=f[g][1],m=g>=h?1:-1;if(h<=a[1]&&a[1]<=
g||g<=a[1]&&a[1]<=h)a[1]!=h&&a[1]!=g?(d.push((a[1]-h)*(k-l)/(g-h)+l),b=m):a[1]==h&&a[1]!=g?(b!=m&&d.push(l),b=m):a[1]!=h&&a[1]==g?(d.push(k),b=m):a[1]==h&&a[1]==g&&(1==b&&d.push(l),d.push(k),b=m)}},_sortBuffer:function(f,d,a,e){var b=f.length;f.sort();if(0<b){for(var c=0,h=d=0;h<b-1;h+=2){var g=Math.abs(f[h+1]-f[h]);!(f[h]<=a&&f[h+1]<=a)&&(!(f[h]>=e&&f[h+1]>=e)&&g>c)&&(c=g,d=h)}b=f[d];f=f[d+1];b>e&&(b=e);b<a&&(b=a);f>e&&(f=e);f<a&&(f=a);d=(b+f)/2}return d},_findPlace:function(f,d,a,e,b,c,h){if(isNaN(a)||
isNaN(e))return!1;for(var g=0;g<this._placedLabels.length;g++){var l=this._placedLabels[g].angle,k=this._placedLabels[g].width*this._scale,m=this._placedLabels[g].height*this._scale,n=this._placedLabels[g].x-a,p=this._placedLabels[g].y-e;if(0===b&&0===l){if(this._findPlace2(-c*this._scale,-h*this._scale,c*this._scale,h*this._scale,n-k,p-m,n+k,p+m))return!1}else{var t=new B(-c*this._scale,-h*this._scale,c*this._scale,h*this._scale,null),s=0,r=1;0!==b&&(s=Math.sin(b),r=Math.cos(b));var q=n*r-p*s,n=
n*s+p*r,l=l-b,s=Math.sin(l),r=Math.cos(l),u=-k*r- -m*s,p=-k*s+-m*r,l=+k*r- -m*s,v=+k*s+-m*r,k=q+u,m=n-p,s=q+l,r=n-v,u=q-u,p=n+p,q=q-l,n=n+v,l=new A;l.addRing([[k,m],[s,r],[u,p],[q,n],[k,m]]);if(t.intersects(l))return!1}}for(;b>Math.PI/2;)b-=Math.PI;for(;b<-(Math.PI/2);)b+=Math.PI;g={};g.layer=f;g.text=d;g.angle=b;g.x=a;g.y=e;g.width=c;g.height=h;this._placedLabels.push(g);return!0},_findPlace2:function(f,d,a,e,b,c,h,g){return(f>=b&&f<=h||a>=b&&a<=h||f<=b&&a>=h)&&(d>=c&&d<=g||e>=c&&e<=g||d<=c&&e>=
g)?!0:!1},_clipLine:function(f,d,a,e){for(var b=this._code(f,d),c=this._code(a,e);0!==b||0!==c;){if(0!==(b&c))return!1;var h=a-f,g=e-d;0!==b?(f<this._xmin?(d+=g*(this._xmin-f)/h,f=this._xmin):f>this._xmax?(d+=g*(this._xmax-f)/h,f=this._xmax):d<this._ymin?(f+=h*(this._ymin-d)/g,d=this._ymin):d>this._ymax&&(f+=h*(this._ymax-d)/g,d=this._ymax),b=this._code(f,d)):(a<this._xmin?(e+=g*(this._xmin-a)/h,a=this._xmin):a>this._xmax?(e+=g*(this._xmax-a)/h,a=this._xmax):e<this._ymin?(a+=h*(this._ymin-e)/g,e=
this._ymin):e>this._ymax&&(a+=h*(this._ymax-e)/g,e=this._ymax),c=this._code(a,e))}this._x0=f;this._y0=d;this._x1=a;this._y1=e;return!0},_code:function(f,d){return(f<this._xmin?1:0)<<3|(f>this._xmax?1:0)<<2|(d<this._ymin?1:0)<<1|(d>this._ymax?1:0)}});F("extend-esri")&&E.setObject("layers.labelLayerUtils.DynamicLabelClass",x,C);return x})},"esri/layers/labelLayerUtils/StaticLabelClass":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/has dojox/gfx/_base ../../kernel ../../lang ../../SpatialReference ../GraphicsLayer ../LabelClass ../../renderers/SimpleRenderer ../../geometry/Geometry ../../geometry/Extent ../../geometry/Point ../../geometry/Polyline ../../geometry/Polygon ../../symbols/TextSymbol ../../symbols/ShieldLabelSymbol ../../symbols/SimpleLineSymbol".split(" "),
function(x,E,z,F,J,C,K,H,G,I,L,M,B,N,D,A,O,P,Q){x=x(G,{declaredClass:"esri.layers.labelLayerUtils.StaticLabel",constructor:function(){this._preparedLabels=[];this._placedLabels=[];this._extent=null;this._ymax=this._ymin=this._xmax=this._xmin=0;this._scale=1;this._LINE_STEP_CONST=1.5;this._POLYGON_X_STEP_CONST=1;this._POLYGON_Y_STEP_CONST=0.75},setMap:function(f,d){this._labelLayer=d;this._map=f;this._xmin=f.extent.xmin;this._xmax=f.extent.xmax;this._ymin=f.extent.ymin;this._ymax=f.extent.ymax;this._scale=
(this._xmax-this._xmin)/f.width},_process:function(f){var d,a,e,b,c,h,g,l;this._preparedLabels=f;this._placedLabels=[];for(f=this._preparedLabels.length-1;0<=f;f--){d=this._preparedLabels[f];b=d.labelWidth;c=d.labelHeight;g=(h=d.options)&&void 0!==h.lineLabelPlacement?h.lineLabelPlacement:"PlaceAtCenter";l=h&&void 0!==h.lineLabelPosition?h.lineLabelPosition:"Above";a=h&&void 0!==h.labelRotation?h.labelRotation:!0;e=d.angle*(Math.PI/180);var k=[];if("point"===d.geometry.type)this._generatePointPositions(d.geometry.x,
d.geometry.y,d.text,e,b,c,d.symbolWidth,d.symbolHeight,h,k);else if("multipoint"===d.geometry.type)for(a=0;a<d.geometry.points.length;a++)this._generatePointPositions(d.geometry.points[a][0],d.geometry.points[a][1],d.text,e,b,c,d.symbolWidth,d.symbolHeight,h,k);else if("polyline"===d.geometry.type)"PlaceAtStart"===g?this._generateLinePositionsPlaceAtStart(d.geometry,d.text,b,c,2*d.symbolHeight+c,g,l,a,k):"PlaceAtEnd"===g?this._generateLinePositionsPlaceAtEnd(d.geometry,d.text,b,c,2*d.symbolHeight+
c,g,l,a,k):this._generateLinePositionsPlaceAtCenter(d.geometry,d.text,b,c,2*d.symbolHeight+c,g,l,a,k);else if("polygon"===d.geometry.type)for(a=0;a<d.geometry.rings.length;a++)h=d.geometry.rings[a],A.prototype.isClockwise(h)&&this._generatePolygonPositionsForManyLabels(h,d.geometry.spatialReference,d.text,e,b,c,k);for(a=0;a<k.length;a++)h=k[a].x,g=k[a].y,void 0!==k[a].angle&&(e=k[a].angle),this._findPlace(d,d.text,h,g,e,b,c)}return this._placedLabels},_generatePointPositions:function(f,d,a,e,b,c,
h,g,l,k){a=l&&l.pointPriorities?l.pointPriorities:"AboveRight";b=(h+b)*this._scale;c=(g+c)*this._scale;switch(a.toLowerCase()){case "aboveleft":f-=b;d+=c;break;case "abovecenter":d+=c;break;case "aboveright":f+=b;d+=c;break;case "centerleft":f-=b;break;case "centercenter":break;case "centerright":f+=b;break;case "belowleft":f-=b;d-=c;break;case "belowcenter":d-=c;break;case "belowright":f+=b;d-=c;break;default:return}k.push({x:f,y:d})},_generateLinePositionsPlaceAtStart:function(f,d,a,e,b,c,h,g,l){c=
a*this._scale;var k=this._LINE_STEP_CONST*Math.min(this._map.width,this._map.height)*this._scale,m,n,p,t,s,r,q,u;for(m=0;m<f.paths.length;m++){var v=f.paths[m],y=c,w=0;for(n=0;n<v.length-1;n++)p=v[n][0],t=v[n][1],s=v[n+1][0],r=v[n+1][1],q=s-p,u=r-t,q=Math.sqrt(q*q+u*u),w+q>y?(w=this._generatePositionsOnLine(f.spatialReference,y,k,w,p,t,s,r,d,a,e,b,h,g,l),y=k):w+=q}},_generateLinePositionsPlaceAtEnd:function(f,d,a,e,b,c,h,g,l){c=a*this._scale;var k=this._LINE_STEP_CONST*Math.min(this._map.width,this._map.height)*
this._scale,m,n,p,t,s,r,q,u;for(m=0;m<f.paths.length;m++){var v=f.paths[m],y=c,w=0;for(n=v.length-2;0<=n;n--)p=v[n+1][0],t=v[n+1][1],s=v[n][0],r=v[n][1],q=s-p,u=r-t,q=Math.sqrt(q*q+u*u),w+q>y?(w=this._generatePositionsOnLine(f.spatialReference,y,k,w,p,t,s,r,d,a,e,b,h,g,l),y=k):w+=q}},_generateLinePositionsPlaceAtCenter:function(f,d,a,e,b,c,h,g,l){c=this._LINE_STEP_CONST*Math.min(this._map.width,this._map.height)*this._scale;var k,m,n,p,t,s,r,q,u;for(k=0;k<f.paths.length;k++){var v=f.paths[k];if(!(2>
v.length)){var y=0;for(m=0;m<v.length-1;m++)p=v[m][0],t=v[m][1],s=v[m+1][0],r=v[m+1][1],q=s-p,u=r-t,y+=Math.sqrt(q*q+u*u);var w=0;for(m=0;m<v.length-1;m++){p=v[m][0];t=v[m][1];s=v[m+1][0];r=v[m+1][1];q=s-p;u=r-t;q=Math.sqrt(q*q+u*u);if(w+q>y/2)break;w+=q}m==v.length-1&&m--;p=v[m][0];t=v[m][1];s=v[m+1][0];r=v[m+1][1];q=s-p;u=r-t;w=y/2-w;u=Math.atan2(u,q);q=p+w*Math.cos(u);u=t+w*Math.sin(u);p=this._angleAndShifts(p,t,s,r,b,h,g);l.push({x:q+p.shiftX,y:u+p.shiftY,angle:p.angle});var y=q,x=u,w=0;for(n=
m;n<v.length-1;n++)n==m?(p=y,t=x):(p=v[n][0],t=v[n][1]),s=v[n+1][0],r=v[n+1][1],q=s-p,u=r-t,q=Math.sqrt(q*q+u*u),w=w+q>c?this._generatePositionsOnLine(f.spatialReference,c,c,w,p,t,s,r,d,a,e,b,h,g,l):w+q;w=0;for(n=m;0<=n;n--)n==m?(p=y,t=x):(p=v[n+1][0],t=v[n+1][1]),s=v[n][0],r=v[n][1],q=s-p,u=r-t,q=Math.sqrt(q*q+u*u),w=w+q>c?this._generatePositionsOnLine(f.spatialReference,c,c,w,p,t,s,r,d,a,e,b,h,g,l):w+q}}},_generatePositionsOnLine:function(f,d,a,e,b,c,h,g,l,k,m,n,p,t,s){l=Math.atan2(g-c,h-b);k=b;
m=c;var r=k,q=m;do if(e=d-e,k+=e*Math.cos(l),m+=e*Math.sin(l),this._belongs(k,m,b,c,h,g))e=this._angleAndShifts(b,c,h,g,n,p,t),d=k+e.shiftX,q=m+e.shiftY,this._labelLayer._isWithinScreenArea(new B(d,q,d,q,f))&&s.push({x:d,y:q,angle:e.angle}),r=k,q=m,e=0,d=a;else return f=h-r,g-=q,Math.sqrt(f*f+g*g);while(1)},_belongs:function(f,d,a,e,b,c){if(b==a&&c==e)return!1;if(b>a){if(f>b||f<a)return!1}else if(f<b||f>a)return!1;if(c>e){if(d>c||d<e)return!1}else if(d<c||d>e)return!1;return!0},_angleAndShifts:function(f,
d,a,e,b,c,h){for(f=Math.atan2(e-d,a-f);f>Math.PI/2;)f-=Math.PI;for(;f<-(Math.PI/2);)f+=Math.PI;e=Math.sin(f);var g=Math.cos(f);a=d=0;"Above"==c&&(d=b*e*this._scale,a=b*g*this._scale);"Below"==c&&(d=-b*e*this._scale,a=-b*g*this._scale);b=[];b.angle=h?-f:0;b.shiftX=-d;b.shiftY=a;return b},_generatePolygonPositionsForManyLabels:function(f,d,a,e,b,c,h){e=this._calcRingExtent(f);if(0.75*(e.xmax-e.xmin)>this._map.width*this._scale||0.75*(e.ymax-e.ymin)>this._map.height*this._scale){var g=this._findCentroidForRing(f);
c=this._map.width*this._scale<e.xmax-e.xmin?this._POLYGON_X_STEP_CONST*this._map.width*this._scale:this._POLYGON_X_STEP_CONST*(e.xmax-e.xmin);b=this._map.height*this._scale<e.ymax-e.ymin?this._POLYGON_Y_STEP_CONST*this._map.height*this._scale:this._POLYGON_Y_STEP_CONST*(e.ymax-e.ymin);var l=g[0]-Math.round((g[0]-e.xmin)/c)*c,k=g[1]-Math.round((g[1]-e.ymin)/b)*b,m,g=!0;for(m=k;m<e.ymax;m+=b)if(g=!g,!(m<this._ymin||m>this._ymax))for(k=l+(g?0:c/2);k<e.xmax;k+=c)this._labelLayer._isWithinScreenArea(new B(k,
m,k,m,d))&&this._isPointWithinRing(a,f,k,m)&&h.push({x:k,y:m})}else{g=this._findCentroidForRing(f);for(e=0;10>e;e++)if(b=g[0],l=g[1]+(e%2?-1:1)*Math.floor(e/2)*c*this._scale,this._labelLayer._isWithinScreenArea(new B(b,l,b,l,d))&&this._isPointWithinRing(a,f,b,l)){h.push({x:b,y:l});break}}},_calcRingExtent:function(f){var d,a;a=new B;for(d=0;d<f.length-1;d++){var e=f[d][0],b=f[d][1];if(void 0===a.xmin||e<a.xmin)a.xmin=e;if(void 0===a.ymin||b<a.ymin)a.ymin=b;if(void 0===a.xmax||e>a.xmax)a.xmax=e;if(void 0===
a.ymax||b>a.ymax)a.ymax=b}return a},_isPointWithinPolygon:function(f,d,a,e){var b;for(b=0;b<d.rings.length;b++)if(this._isPointWithinRing(f,d.rings[b],a,e))return!0;return!1},_isPointWithinRing:function(f,d,a,e){var b,c,h,g,l=[],k=d.length;for(f=0;f<k-1;f++)if(b=d[f][0],c=d[f][1],h=d[f+1][0],g=d[f+1][1],!(b==h&&c==g)){if(c==g)if(e==c)l.push(b);else continue;b==h?(c<g&&(e>=c&&e<g)&&l.push(b),c>g&&(e<=c&&e>g)&&l.push(b)):(c=(h-b)/(g-c)*(e-c)+b,b<h&&(c>=b&&c<h)&&l.push(c),b>h&&(c<=b&&c>h)&&l.push(c))}l.sort(function(a,
b){return a-b});for(f=0;f<l.length-1;f++)if(b=l[f],h=l[f+1],a>=b&&a<h)if(f%2)break;else return!0;return!1},_findCentroidForRing:function(f){for(var d=f.length,a=[0,0],e=0,b=f[0][0],c=f[0][1],h=1;h<d-1;h++){var g=f[h][0],l=f[h][1],k=f[h+1][0],m=f[h+1][1],n=(g-b)*(m-c)-(k-b)*(l-c);a[0]+=n*(b+g+k);a[1]+=n*(c+l+m);e+=n}a[0]/=3*e;a[1]/=3*e;return a},_findCentroidForFeature:function(f){for(var d=0,a=[0,0],e=0;e<f.rings.length;e++)for(var b=f.rings[e],c=b.length,h=b[0][0],g=b[0][1],l=1;l<c-1;l++){var k=
b[l][0],m=b[l][1],n=b[l+1][0],p=b[l+1][1],t=(k-h)*(p-g)-(n-h)*(m-g);a[0]+=t*(h+k+n);a[1]+=t*(g+m+p);d+=t}a[0]/=3*d;a[1]/=3*d;return a},_findPlace:function(f,d,a,e,b,c,h){if(isNaN(a)||isNaN(e))return!1;for(var g=0;g<this._placedLabels.length;g++){var l=this._placedLabels[g].angle,k=this._placedLabels[g].width*this._scale,m=this._placedLabels[g].height*this._scale,n=this._placedLabels[g].x-a,p=this._placedLabels[g].y-e;if(0===b&&0===l){if(this._findPlace2(-c*this._scale,-h*this._scale,c*this._scale,
h*this._scale,n-k,p-m,n+k,p+m))return!1}else{var t=new B(-c*this._scale,-h*this._scale,c*this._scale,h*this._scale,null),s=0,r=1;0!==b&&(s=Math.sin(b),r=Math.cos(b));var q=n*r-p*s,n=n*s+p*r,l=l-b,s=Math.sin(l),r=Math.cos(l),u=-k*r- -m*s,p=-k*s+-m*r,l=+k*r- -m*s,v=+k*s+-m*r,k=q+u,m=n-p,s=q+l,r=n-v,u=q-u,p=n+p,q=q-l,n=n+v,l=new A;l.addRing([[k,m],[s,r],[u,p],[q,n],[k,m]]);if(t.intersects(l))return!1}}for(;b>Math.PI/2;)b-=Math.PI;for(;b<-(Math.PI/2);)b+=Math.PI;g={};g.layer=f;g.text=d;g.angle=b;g.x=
a;g.y=e;g.width=c;g.height=h;this._placedLabels.push(g);return!0},_findPlace2:function(f,d,a,e,b,c,h,g){return(f>=b&&f<=h||a>=b&&a<=h||f<=b&&a>=h)&&(d>=c&&d<=g||e>=c&&e<=g||d<=c&&e>=g)?!0:!1}});F("extend-esri")&&E.setObject("layers.labelLayerUtils.StaticLabel",x,C);return x})},"*noref":1}});
define("esri/layers/LabelLayer","require dojo/_base/declare dojo/_base/lang dojo/number dojo/_base/array dojo/_base/connect dojo/has dojox/gfx/_base ../kernel ../lang ../graphic ../PopupInfo ./labelLayerUtils/DynamicLabelClass ./labelLayerUtils/StaticLabelClass ../symbols/TextSymbol ../symbols/ShieldLabelSymbol ../geometry/Extent ../geometry/Point ./GraphicsLayer ./LabelClass ../renderers/SimpleRenderer".split(" "),function(x,E,z,F,J,C,K,H,G,I,L,M,B,N,D,A,O,P,Q,f,d){x=E(Q,{declaredClass:"esri.layers.LabelLayer",
constructor:function(a){this.id="labels";this.featureLayers=[];this._featureLayerInfos=[];this._preparedLabels=[];this._engineType="STATIC";this._mapEventHandlers=[];a&&(a.id&&(this.id=a.id),a.mode&&(this._engineType="DYNAMIC"===a.mode.toUpperCase()?"DYNAMIC":"STATIC"))},_setMap:function(a){var e=this.inherited(arguments);this._map&&this._mapEventHandlers.push(this._map.on("extent-change",z.hitch(this,"refresh")));this.refresh();return e},_unsetMap:function(){var a;for(a=0;a<this._mapEventHandlers.length;a++)C.disconnect(this._mapEventHandlers[a]);
this.refresh();this.inherited(arguments)},setAlgorithmType:function(a){this._engineType=a&&"DYNAMIC"===a.toUpperCase()?"DYNAMIC":"STATIC";this.refresh()},addFeatureLayer:function(a,e,b,c){if(!this.getFeatureLayer(a.layerId)){var h=[];h.push(a.on("update-end",z.hitch(this,"refresh")));h.push(a.on("suspend",z.hitch(this,"refresh")));h.push(a.on("resume",z.hitch(this,"refresh")));h.push(a.on("edits-complete",z.hitch(this,"refresh")));h.push(a.on("labeling-info-change",z.hitch(this,"refresh")));h.push(a.on("time-extent-change",
z.hitch(this,"refresh")));h.push(a.on("show-labels-change",z.hitch(this,"refresh")));this._featureLayerInfos.push({FeatureLayer:a,LabelExpressionInfo:b,LabelingOptions:c,LabelRenderer:e,EventHandlers:h});this.featureLayers.push(a);this.refresh()}},getFeatureLayer:function(a){var e,b;for(e=0;e<this.featureLayers.length;e++)if(b=this.featureLayers[e],void 0!==b&&b.id==a)return b;return null},removeFeatureLayer:function(a){var e;a=this.getFeatureLayer(a);if(void 0!==a&&(e=J.indexOf(this.featureLayers,
a),-1<e)){this.featureLayers.splice(e,1);for(a=0;a<this._featureLayerInfos[e].EventHandlers.length;a++)C.disconnect(this._featureLayerInfos[e].EventHandlers[a]);this._featureLayerInfos.splice(e,1);this.refresh()}},removeAllFeatureLayers:function(){var a;for(a=0;a<this.featureLayers.length;a++){for(var e=0;e<this._featureLayerInfos[a].EventHandlers.length;e++)C.disconnect(this._featureLayerInfos[a].EventHandlers[e]);this.featureLayers=[];this._featureLayerInfos=[]}this.refresh()},getFeatureLayers:function(){return this.featureLayers},
getFeatureLayerInfo:function(a){var e,b;for(e=0;e<this.featureLayers.length;e++)if(b=this.featureLayers[e],void 0!==b&&b.id==a)return this._featureLayerInfos[e];return null},refresh:function(a){var e,b,c,h,g,l=[],k="DYNAMIC"===this._engineType?new B:new N;if(this._map){k.setMap(this._map,this);this._preparedLabels=[];for(a=0;a<this.featureLayers.length;a++)if(b=this.featureLayers[a],b.visible&&b.showLabels&&b.visibleAtMapScale&&!b._suspended)if(e=this._featureLayerInfos[a],e.LabelRenderer){if(l=b.labelingInfo)if(g=
l[0])h=this._getLabelExpression(g),this._convertOptions(g);c=e.LabelRenderer;e.LabelExpressionInfo&&(h=e.LabelExpressionInfo);g=this._convertOptions(null);e.LabelingOptions&&(void 0!==e.LabelingOptions.lineLabelPlacement&&(g.lineLabelPlacement=e.LabelingOptions.lineLabelPlacement),void 0!==e.LabelingOptions.lineLabelPosition&&(g.lineLabelPosition=e.LabelingOptions.lineLabelPosition),void 0!==e.LabelingOptions.labelRotation&&(g.labelRotation=e.LabelingOptions.labelRotation));c instanceof f&&(h=this._getLabelExpression(c),
c=new d(c.symbol),g=this._convertOptions(c));this._addLabels(b,c,h,g)}else if(l=b.labelingInfo)for(e=l.length-1;0<=e;e--)if(g=l[e])c=new f(g instanceof f?g.toJson():g),h=this._getLabelExpression(g),g=this._convertOptions(g),this._addLabels(b,c,h,g);h=k._process(this._preparedLabels);this.clear();this.drawLabels(this._map,h)}},drawLabels:function(a,e){this._scale=(a.extent.xmax-a.extent.xmin)/a.width;var b;for(b=0;b<e.length;b++){var c=e[b],h=c.x,g=c.y,d=c.text,f=c.angle,m=c.layer.labelSymbol;"polyline"==
c.layer.geometry.type&&c.layer.options.labelRotation?m.setAngle(f*(180/Math.PI)):m.setAngle(0);m.setText(d);c=h;m instanceof D&&(h=m.getHeight(),f=Math.sin(f),c-=0.25*h*this._scale*f,g-=0.33*h*this._scale);f=new L(new P(c,g,a.extent.spatialReference));f.setSymbol(m);this.add(f)}},_addLabels:function(a,e,b,c){var f,g,d,k;if(this._isWithinScaleRange(e.minScale,e.maxScale)&&b&&""!==b)for(f=0;f<a.graphics.length;f++)g=a.graphics[f],!1!==g.visible&&(d=g.geometry,this._isWhere(e.where,g.attributes)&&this._isWithinScreenArea(d)&&
(k=this._buildLabelText(b,g.attributes,a.fields,c),this._addLabel(k,e,a.renderer,g,c,d)))},_isWithinScreenArea:function(a){a="point"===a.type?new O(a.x,a.y,a.x,a.y,a.spatialReference):a.getExtent();a=this._intersects(this._map,a);return null===a||0===a.length?!1:!0},_isWithinScaleRange:function(a,e){var b=this._map.getScale();return 0<a&&b>=a||0<e&&b<=e?!1:!0},_isWhere:function(a,e){try{if(!a)return!0;if(a){var b=a.split(" ");if(3===b.length)return this._sqlEquation(e[b[0].substr(1,b[0].length-2)],
b[1],b[2]);if(7===b.length){var c=this._sqlEquation(e[b[0].substr(1,b[0].length-2)],b[1],b[2]),f=b[3],g=this._sqlEquation(e[b[4].substr(1,b[4].length-2)],b[5],b[6]);switch(f){case "AND":return c&&g;case "OR":return c||g}}}return!1}catch(d){console.log("Error.: can't parse \x3d "+a)}},_sqlEquation:function(a,e,b){switch(e){case "\x3d":return a==b?!0:!1;case "\x3c\x3e":return a!=b?!0:!1;case "\x3e":return a>b?!0:!1;case "\x3e\x3d":return a>=b?!0:!1;case "\x3c":return a<b?!0:!1;case "\x3c\x3d":return a<=
b?!0:!1}return!1},_addLabel:function(a,e,b,c,f,g){var d,k,m,n;if(a&&""!==z.trim(a)&&e){d=e.getSymbol(c);d instanceof D?(d=new D(d.toJson()),d.setVerticalAlignment("baseline"),d.setHorizontalAlignment("center")):d=d instanceof A?new A(d.toJson()):new D;d.setText(a);e.symbol=d;if(k=this._getProportionalSize(e.sizeInfo,c.attributes))d instanceof D?d.setSize(k):d instanceof A&&(d.setWidth(k),d.setHeight(k));m=k=0;if(b)if(n=b.getSize(c),b=b.getSymbol(c),0!==n)m=k=n;else if(b)if("simplemarkersymbol"==b.type)m=
k=b.size;else if("picturemarkersymbol"==b.type)k=b.width,m=b.height;else if("simplelinesymbol"==b.type||"cartographiclinesymbol"==b.type)k=b.width;b={};b.graphic=c;b.options=f;b.geometry=g;b.labelRenderer=e;b.labelSymbol=d;b.labelWidth=d.getWidth()/2;b.labelHeight=d.getHeight()/2;b.symbolWidth=H.normalizedLength(k)/2;b.symbolHeight=H.normalizedLength(m)/2;b.text=a;b.angle=d.angle;this._preparedLabels.push(b)}},_buildLabelText:function(a,e,b,c){return a.replace(/{[^}]*}/g,function(a){var d,f=a;for(d=
0;d<b.length;d++)if("{"+b[d].name+"}"==a){var f=e[b[d].name],k=b[d].domain;if(k&&z.isObject(k)){if("codedValue"==k.type)for(a=0;a<k.codedValues.length;a++)k.codedValues[a].code==f&&(f=k.codedValues[a].name);else"range"==k.type&&(k.minValue<=f&&f<=k.maxValue)&&(f=k.name);break}k=b[d].type;if("esriFieldTypeDate"==k)(k="DateFormat"+M.prototype._dateFormats[c&&c.dateFormat||"shortDate"])&&(f=I.substitute({myKey:f},"${myKey:"+k+"}"));else if("esriFieldTypeInteger"==k||"esriFieldTypeSmallInteger"==k||"esriFieldTypeLong"==
k||"esriFieldTypeDouble"==k)c&&(c.numberFormat&&c.numberFormat.digitSeparator&&c.numberFormat.places)&&(f=F.format(f,{places:c.numberFormat.places}))}return f})},_getLabelExpression:function(a){return a.labelExpressionInfo?a.labelExpressionInfo.value:this._validSyntax(a.labelExpression)?this._convertLabelExpression(a.labelExpression):""},_validSyntax:function(a){return/^(\s*\[[^\]]+\]\s*)+$/i.test(a)},_convertLabelExpression:function(a){return a.replace(RegExp("\\[","g"),"{").replace(RegExp("\\]",
"g"),"}")},_getProportionalSize:function(a,d){if(!a)return null;var b=I.substitute(d,"${"+a.field+"}",{first:!0});return!a.minSize||!a.maxSize||!a.minDataValue||!a.maxDataValue||!b||0>=a.maxDataValue-a.minDataValue?null:(a.maxSize-a.minSize)/(a.maxDataValue-a.minDataValue)*(b-a.minDataValue)+a.minSize},_convertOptions:function(a){var d="shortDate",b=null,c="",f=!0;a&&(d=a.dateFormat,b=a.numberFormat,c=a.labelPlacement);if("always-horizontal"==c||"esriServerPolygonPlacementAlwaysHorizontal"==c)f=!1;
return{dateFormat:d,numberFormat:b,pointPriorities:"above-center"==c||"esriServerPointLabelPlacementAboveCenter"==c?"AboveCenter":"above-left"==c||"esriServerPointLabelPlacementAboveLeft"==c?"AboveLeft":"above-right"==c||"esriServerPointLabelPlacementAboveRight"==c?"AboveRight":"below-center"==c||"esriServerPointLabelPlacementBelowCenter"==c?"BelowCenter":"below-left"==c||"esriServerPointLabelPlacementBelowLeft"==c?"BelowLeft":"below-right"==c||"esriServerPointLabelPlacementBelowRight"==c?"BelowRight":
"center-center"==c||"esriServerPointLabelPlacementCenterCenter"==c?"CenterCenter":"center-left"==c||"esriServerPointLabelPlacementCenterLeft"==c?"CenterLeft":"center-right"==c||"esriServerPointLabelPlacementCenterRight"==c?"CenterRight":"AboveRight",lineLabelPlacement:"above-start"==c||"below-start"==c||"center-start"==c?"PlaceAtStart":"above-end"==c||"below-end"==c||"center-end"==c?"PlaceAtEnd":"PlaceAtCenter",lineLabelPosition:"above-after"==c||"esriServerLinePlacementAboveAfter"==c||"above-along"==
c||"esriServerLinePlacementAboveAlong"==c||"above-before"==c||"esriServerLinePlacementAboveBefore"==c||"above-start"==c||"esriServerLinePlacementAboveStart"==c||"above-end"==c||"esriServerLinePlacementAboveEnd"==c?"Above":"below-after"==c||"esriServerLinePlacementBelowAfter"==c||"below-along"==c||"esriServerLinePlacementBelowAlong"==c||"below-before"==c||"esriServerLinePlacementBelowBefore"==c||"below-start"==c||"esriServerLinePlacementBelowStart"==c||"below-end"==c||"esriServerLinePlacementBelowEnd"==
c?"Below":"center-after"==c||"esriServerLinePlacementCenterAfter"==c||"center-along"==c||"esriServerLinePlacementCenterAlong"==c||"center-before"==c||"esriServerLinePlacementCenterBefore"==c||"center-start"==c||"esriServerLinePlacementCenterStart"==c||"center-end"==c||"esriServerLinePlacementCenterEnd"==c?"OnLine":"Above",labelRotation:f,howManyLabels:"OneLabel"}}});K("extend-esri")&&z.setObject("layers.LabelLayer",x,G);return x});