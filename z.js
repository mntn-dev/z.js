/*z.js-0.2;(c)2013 KPTL Co. <http://kptl.co/> c/o Benjamin Lips <b--AT--kptl.co>;
Licensed under the MIT License <http://mit-license.org/>;
For documentation see http://github.com/kptl-co/z.js or http://kptl.co/z.js*/


var z={

js:function(d,p,r){

 if(!d)return'';d=d.toString();
 if((d.match(/[\u200c\u200d]/g)||[]).length%8!=0)return(!1);

 var R='',Z,j,i,l,t,C='\u200c'/*ZWNJ*/,D='\u200d'/*ZWJ*/,
 A=(Array(5).join('\x00')+Array(5).join('\xff'));
 B=(Array(33).join(D)+Array(33).join(C));


 /*RC4 implementation*/
 function rc4(d,p){if(!p)return(d);var a=[];j=0;for(i=0;256>i;i++)a[i]=i;
 for(i=0;i<256;i++){j=(j+a[i]+p.toString().charCodeAt(i%p.length))%256;Z=
 a[i];a[i]=a[j];a[j]=Z;}i=j=0;for(l=0;l<d.length;l++){i=(i+1)%256;j=(j+a[
 i])%256;Z=a[i];a[i]=a[j];a[j]=Z;R+=String.fromCharCode(d.charCodeAt(l)^a
 [(a[i]+a[j])%256]);}return(R);}



 if(RegExp(C).test(d)){//restoring

  if(RegExp(B).test(d)){//parts-mode
   d=d.replace(RegExp(B,'g'),'').replace(/([\s\S])([\u200c\u200d]+)/g,function(_1,_2){
   t=_2;return(z.js.apply(!1,[_1,(p||!1),(r===!!1)?!!1:!1])||(t=!1));}).
   replace(RegExp('\\'+t,'g'),'');return(!t?!1:d);
   }

  d=rc4(d.replace(RegExp('[^'+C+D+']','g'),'').replace(/.{8}/g,function(_1){return(
  String.fromCharCode(parseInt(_1.replace(RegExp(C,'g'),'0').replace(RegExp(D,'g'),'1'),2)));}),p);
  return(RegExp(A).test(d)?d.slice(8):((r===!!1)?d:!1));

 }



 if(r&&r[1]){//hiding: parts-mode
 t='';if(r[1].charCodeAt(0)<48)t='\\';
 if((d.match(RegExp(t+r[1],'g'))||[1]).length%2!=0)return(!1);
 return(d.replace(RegExp(t+r[1]+'{2}','g'),'').replace(RegExp(t+r[1]+'[\\s\\S]+?'+t+r[1],'g'),
 function(_1){return(B+z.js.apply(!1,[_1.slice(1,-1),(p||!1),r[0]]));}));
 }

 //hiding

 if(r)r=d.replace(/<.*?>/g,'').replace(/[^ \t\n]/g,((r===!!1)?'\u2589':r.toString()[0])).
 replace(/ {2,}/g,' ');d=d.replace(/[\u0100-\uffff]/g,function(_1){return('&#'+_1.charCodeAt(0)+';');});

 d=rc4(A+d,p).replace(/[\s\S]/g,function(_1){t=_1.charCodeAt(0).toString(2);return(t[13]?_1:
 Array(9-t.length).join(0)+t).replace(/0/g,C).replace(/1/g,D);})

 return((r?r.slice(0,1):'')+d+(r?r.slice(1):''));

 }


};
