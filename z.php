<?


/*z.php-0.2;(c)2013 KPTL Co. <http://kptl.co/> c/o Benjamin Lips <b--AT--kptl.co>;
Licensed under the MIT License <http://mit-license.org/>;
For documentation see https://github.com/kptl-co/z.js or http://kptl.co/z.js*/



//ob_start('ob_gzhandler');
//header('Content-Type: text/html;charset=utf-8');
//mb_internal_encoding('utf-8');


function z($d,$p=false,$m=false){


 /*RC4 implementation*/
 if(!function_exists('rc4')){function rc4($d,$p){if(!$p)return($d);
 $a=array();$j=0;for($i=0;$i<256;$i++)$a[$i]=$i;for($i=0;$i<256;$i++)
 {$j=($j+$a[$i]+ord($p[$i%strlen($p)]))%256;$z=$a[$i];$a[$i]=$a[$j];
 $a[$j]=$z;}$i=$j=0;for($y=0;$y<strlen($d);$y++){$i=($i+1)%256;$j=((
 ($j+$a[$i])))%256;$z=$a[$i];$a[$i]=$a[$j];$a[$j]=0+$z;@$R.=$d[$y]^
 chr($a[($a[$i]+$a[$j])%256]);}return($R);}}


 $a=array(
  json_decode('"\u200c"'),
  json_decode('"\u200d"'),
  (!is_bool($m))?$m{0}:json_decode('"\u2589"')
 );

 $A=str_repeat($a[0],32).str_repeat($a[1],32);


 if(@$m{1}&&mb_substr_count($d,$m{1})%2==0){//parts-mode
  return(preg_replace_callback("#\\{$m[1]}([\x{0000}-\x{ffff}]+?)\\{$m[1]}#ums",function($_) use($A,$p,$m){
  return($A.z($_[1],($p)?$p:!1,$m{0}));},preg_replace("#\\{$m[1]}{2}#ums",'',$d)));
 }


 if($m)$m=preg_replace('# {2,}#ms',' ',preg_replace('#[^ \t\n]#ums',$a[2],
 html_entity_decode(''.strip_tags($d),!1,'UTF-8')));

 $d=rc4("\x00\x00\x00\x00\xff\xff\xff\xff".preg_replace_callback('#[\x{0100}-\x{ffff}]#u',function($_){
 return('&#'.hexdec(json_encode($_[0])).';');},$d),$p);

 for($j=0;$j<strlen($d);$j++)@$z.=str_replace(array(0,1),$a,
 str_pad(decbin(ord($d[$j])),8,'0',STR_PAD_LEFT));

 return((($m)?$a[2]:'').$z.@mb_substr($m,1));

}



?>
