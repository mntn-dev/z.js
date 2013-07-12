/*z.php-0.1;(c)2013 KPTL.co <http://kptl.co/> c/o Benjamin Lips <b--AT--kptl.co>;
Licensed under the MIT License <http://mit-license.org/>*/

function z($d,$_=false,$r=false,$a=false){//http://kptl.co/z.js#wtf
if(!function_exists('rc4')){function rc4($d,$_){if(!$_)return($d);$a=array();
$j=0;for($i=0;$i<256;$i++)$a[$i]=$i;for($i=0;$i<256;$i++){$j=($j+$a[$i]+ord(
$_[$i%strlen($_)]))%256;$z=$a[$i];$a[$i]=$a[$j];$a[$j]=$z;}$i=$j=0;for($y=0;
$y<strlen($d);$y++){$i=($i+1)%256;$j=((($j+$a[$i])))%256;$z=$a[$i];$a[$i]=$a
[$j];$a[$j]=0+$z;@$R.=$d[$y]^chr($a[($a[$i]+$a[$j])%256]);}return($R);}}$a=
array(($a)?'\t':json_decode('"\u200c"'),($a)?' ':json_decode('"\u200d"'),(!
is_bool($r))?$r:json_decode('"\u2589"'));if($r)$r2=preg_replace("# {2,}#"," "
,preg_replace("#[^ \t\n]#ums",$a[2],html_entity_decode(''.strip_tags($d))));
$d=rc4('<!---->'.preg_replace_callback('#[\x{0100}-\x{ffff}]#u',function($_1)
{return('&#'.hexdec(json_encode($_1[0])).';');},$d),$_);for($j=0;$j<strlen($d
);$j++)@$z.=str_replace(array(0,1),$a,str_pad(decbin(ord($d[$j])),8,'0',
STR_PAD_LEFT));return((($r)?$a[2]:'').$z.@mb_substr($r2,1));}
