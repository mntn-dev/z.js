
<img src="http://kptl.co/z.js/z-js.png" alt=""/>

<h2>z.js&mdash;turns content (in)visible*</h2>
*using Unicode's ZW(N)Js

<h3>http://kptl.co/z.js</h3>



<h3>Demos</h3>
http://kptl.co/z.js/my_homepage.php (Awesome)<br/>
http://kptl.co/z.js/blog-demo.php

<h3>Usage</h3>

<pre>
/*

z.js(DAT [, PWD=false, CHR/RAW=false, ASC=false])

DAT -- content to hide/restore
PWD -- Password (RC4)
CHR -- Character replacement; default (TRUE): ▉
RAW -- if TRUE, returns raw data instead of FALSE when encrypted 
ASC -- ASCII mode: uses TAB and SPACE instead of ZW(N)J

*/


1.  //basic example; results in zero-width
    var tmp='A'+z.js('hello world')+'B';
    console.log(tmp,tmp.length); → A‌‌‍‍‍‍‌‌‌‌‍‌‌‌‌‍‌‌‍‌‍‍‌‍‌‌‍‌‍‍‌‍‌‌‍‌‍‍‌‍‌‌‍‌‍‍‌‍‌‌‍‍‍‍‍‌‌‍‍‌‍‌‌‌‌‍‍‌‌‍‌‍‌‍‍‌‍‍‌‌‌‍‍‌‍‍‌‌‌‍‍‌‍‍‍‍‌‌‍‌‌‌‌‌‌‍‍‍‌‍‍‍‌‍‍‌‍‍‍‍‌‍‍‍‌‌‍‌‌‍‍‌‍‍‌‌‌‍‍‌‌‍‌‌B 146
    console.log(z.js(tmp)); → hello world

2.  //character replacement
    console.log(z.js('hello world',false,'*')) → *‌‌‍‍‍‍‌‌‌‌‍‌‌‌‌‍‌‌‍‌‍‍‌‍‌‌‍‌‍‍‌‍‌‌‍‌‍‍‌‍‌‌‍‌‍‍‌‍‌‌‍‍‍‍‍‌‌‍‍‌‍‌‌‌‌‍‍‌‌‍‌‍‌‍‍‌‍‍‌‌‌‍‍‌‍‍‌‌‌‍‍‌‍‍‍‍‌‌‍‌‌‌‌‌‌‍‍‍‌‍‍‍‌‍‍‌‍‍‍‍‌‍‍‍‌‌‍‌‌‍‍‌‍‍‌‌‌‍‍‌‌‍‌‌**** *****

3.  //encrypt
    console.log(z.js(z.js('hello world','yay'),'nay')); → false
    console.log(z.js(z.js('hello world','yay'),'yay')) → hello world
    console.log(z.js(z.js('hello world','yay'),'nay',true)) → A)ð

</pre>

