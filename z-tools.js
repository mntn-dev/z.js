/*
    z-tools.js-0.1
    --------------

    z_ts()
    z_output()
    z_debug()
*/

function z_ts() {
  /*
      Use tabs (\t) and spaces (\x20) instead
      of Unicode's ZW(N)Js (\u200c,\u200d);

      Notes:
      ------

      when restoring, ensure to have no
      additional tabs and spaces included/wrapped;

      for example, z_ts(z_ts('hello world')+'   ')->false

      and vice versa, ensure nothing gets lost;
      like when using output in comments, posts --
      since it gets probably trimmed; ('   '->' ')
  */

  a = arguments;
  if ((a[0].match(/\t/g) || []).length > 32) a[0] = a[0].replace(/\t/g, '\u200c').replace(/\x20/g, '\u200d');
  a = z.js.apply(!1, a);
  return (!a ? !1 : a.replace(/\u200c/g, '\t').replace(/\u200d/g, '\x20'));
}

function z_output(d) {
  for (j in (d = d.match(/[\u200c\u200d]{8}/g))) {
      if (j == 0) console.info('0=\\u200c (ZWNJ), 1=\\u200d (ZWJ)\nChars: ' + d.length + '\n\n');
      b = d[j].replace(/\u200c/g, '0').replace(/\u200d/g, '1');
      console.log(b + ' ' + String.fromCharCode(parseInt(b, 2)));
  }

  return ('u' == (typeof(j)).slice(0, 1)) ? 'No \'hidden\' content detected;' : '';
}

function z_debug(d) {
  var C = '\u200c' /*ZWNJ*/ ,
      D = '\u200d' /*ZWJ*/ ,
      B = (Array(33).join(D) + Array(33).join(C)), //used as header in Parts-mode; \xff\xff\xff\xff\x00\x00\x00\x00
      p = !1,
      o = '',
      l = 0;

  if (!RegExp(C).test(d)) return 'No \'hidden\' content detected; ' +
      'use ' + arguments.callee.name + '(z.js(content [, pwd, mask]))';

  header = (Array(33).join(C) + Array(33).join(D)); //A

  if ((zwnj = d.match(/[\u200c\u200d]/g).length) % 8 != 0) return 'Incorrect data';

  //Parts-mode
  p = ((d.match(RegExp(B, 'g'))) || []).length;
  m = (p > 0) ? d.match(RegExp(B + '([\\s\\S])', 'g')).join('').slice(-1) : '';
  if (m.charCodeAt(0) < 48) m = '\\' + m;

  console.log('Length:      ' + (l = d.length) + ' total');
  console.log('             ' + zwnj + ' ZW(N)Js (' + (~~((zwnj / l) * 1e2)) + '%) -> ' + (l = (zwnj / 8)) + ' chars (' + zwnj + '/8)');
  console.log('             ' + ((p > 0) ? d.match(RegExp(m, 'g')).length : ((d.match(/[^\u200c\u200d]/g) || []).length)) + ' non-relevant char(s)');
  console.log('Encrypted:   ' + (((h = ((d.match(RegExp(header, 'g'))) || []).length) > 0) ? 'No' : 'Yes' + ((p > 0) ? ' (Parts only)' : '')));
  console.log('Parts-mode:  ' + ((p > 0) ? 'Yes (' + p + '/mask:' + m.slice(-1) + ')' : 'No'));
  console.log('Output:      ' + ((p == 0) ? (l - (h * 8) - (p * 8)) : d.replace(RegExp(m, 'g'), '').match(/[^\u200c\u200d]/g).length) + ((h > 0) ? ' (excluded ' + ((h * 8) + (p * 8)) + ' header chars (' + (h) + ' initial header(s) (8), ' + (p) + ' Parts-mode header(s) (8))' : ''));

  d = d.replace(RegExp(header, 'g'), '');
  if (p == 0) d = d.match(/[\u200c\u200d]{8}/g);
  else d = d.replace(RegExp(B, 'g'), '').match(/[\u200c\u200d]{8}|[\s\S]/g, '');

  for (j in (d)) {
      if (d[j].length == 8) { //ZW(N)Js->binary->chr
          l++;
          o += (String.fromCharCode(parseInt(d[j].replace(/\u200c/g, '0').replace(/\u200d/g, '1'), 2)));
      } else o += (m && d[j] == m.slice(-1)) ? '' : (d[j]);
  }

  console.log('             ' + ((h > 0) ? o.replace(RegExp('\x00\x00\x00\x00\xff\xff\xff\xff', 'g'), '') : o));
  console.log('             ' + o.toSource());

  console.info('Thanks for calling.\n\nRegards,\n' + arguments.callee.name + '()\n\n');
  return '';
}
