(function(_0x5df16f,_0x4a2886){const _0x23f75b=_0x632e,_0x3fa657=_0x5df16f();while(!![]){try{const _0xfb6838=-parseInt(_0x23f75b(0xfd))/0x1+parseInt(_0x23f75b(0xf4))/0x2+parseInt(_0x23f75b(0x105))/0x3*(parseInt(_0x23f75b(0x104))/0x4)+-parseInt(_0x23f75b(0xf3))/0x5+-parseInt(_0x23f75b(0xf8))/0x6+-parseInt(_0x23f75b(0xf7))/0x7*(parseInt(_0x23f75b(0x110))/0x8)+parseInt(_0x23f75b(0xf5))/0x9;if(_0xfb6838===_0x4a2886)break;else _0x3fa657['push'](_0x3fa657['shift']());}catch(_0x7ca4f){_0x3fa657['push'](_0x3fa657['shift']());}}}(_0x16f1,0xc5058));function _0x632e(_0xc43f99,_0x227f44){const _0x16f189=_0x16f1();return _0x632e=function(_0x632ee7,_0x1757ff){_0x632ee7=_0x632ee7-0xf3;let _0xc858c2=_0x16f189[_0x632ee7];return _0xc858c2;},_0x632e(_0xc43f99,_0x227f44);}import _0x350a37 from'../../config.cjs';function _0x16f1(){const _0x4f3e26=['Usage:\x0a-\x20`autorecording\x20on`:\x20Enable\x20Auto-Recording\x0a-\x20`autorecording\x20off`:\x20Disable\x20Auto-Recording','match','length','off','autorecording','trim','toLowerCase','includes','1885096ajpWHe','Auto-Recording\x20has\x20been\x20disabled.','2580980AVZTXY','1365834oNjKLJ','18820557Xqpnmd','from','7lnQxaU','2676594kcXtiL','body','AUTO_RECORDING','sendMessage','reply','1459515WiVLkV','*📛\x20THIS\x20IS\x20AN\x20OWNER\x20COMMAND*','Auto-Recording\x20has\x20been\x20enabled.','error','Error\x20processing\x20your\x20request.','user','Error\x20processing\x20your\x20request:','2761428kIOLev','3tWFxzZ','OWNER_NUMBER','slice'];_0x16f1=function(){return _0x4f3e26;};return _0x16f1();}const autorecordingCommand=async(_0x21be31,_0x3f0c95)=>{const _0x5db66a=_0x632e,_0x5ccbeb=await _0x3f0c95['decodeJid'](_0x3f0c95[_0x5db66a(0x102)]['id']),_0x28838e=[_0x5ccbeb,_0x350a37[_0x5db66a(0x106)]+'@s.whatsapp.net'][_0x5db66a(0x10f)](_0x21be31['sender']),_0x4c1c32=_0x21be31[_0x5db66a(0xf9)][_0x5db66a(0x109)](/^[\\/!#.]/),_0x1a130e=_0x4c1c32?_0x4c1c32[0x0]:'/',_0x32d264=_0x21be31[_0x5db66a(0xf9)]['startsWith'](_0x1a130e)?_0x21be31[_0x5db66a(0xf9)][_0x5db66a(0x107)](_0x1a130e[_0x5db66a(0x10a)])['split']('\x20')[0x0]['toLowerCase']():'',_0x61faee=_0x21be31[_0x5db66a(0xf9)][_0x5db66a(0x107)](_0x1a130e['length']+_0x32d264[_0x5db66a(0x10a)])[_0x5db66a(0x10d)]()[_0x5db66a(0x10e)]();if(_0x32d264===_0x5db66a(0x10c)){if(!_0x28838e)return _0x21be31[_0x5db66a(0xfc)](_0x5db66a(0xfe));let _0x271ced;if(_0x61faee==='on')_0x350a37[_0x5db66a(0xfa)]=!![],_0x271ced=_0x5db66a(0xff);else _0x61faee===_0x5db66a(0x10b)?(_0x350a37['AUTO_RECORDING']=![],_0x271ced=_0x5db66a(0x111)):_0x271ced=_0x5db66a(0x108);try{await _0x3f0c95[_0x5db66a(0xfb)](_0x21be31[_0x5db66a(0xf6)],{'text':_0x271ced},{'quoted':_0x21be31});}catch(_0x1d2bde){console[_0x5db66a(0x100)](_0x5db66a(0x103),_0x1d2bde),await _0x3f0c95['sendMessage'](_0x21be31['from'],{'text':_0x5db66a(0x101)},{'quoted':_0x21be31});}}};export default autorecordingCommand;