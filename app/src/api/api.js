const _0x25e0f2=_0xe989;function _0x5b9e(){const _0x175149=['Error\x20:\x20','data','48YIFDRc','application/json,\x20text/plain,\x20*/*','same-site','48pMKlas','message','queryObj','stringify','587478EPWrIs','228802bwjnTy','create','generateHeaders','cors','axiosInstance','...','info','112024gHJNCP','3525860JIYkCU','randomUserAgent','9715MtuLtu','status','query','349254CPpLbF','empty','user','Response\x20:\x20','masterHash','GET','42dojIgl','Request\x20Body\x20:\x20','Initdata\x20','substring','proxy','host','Request\x20Header\x20:\x20','origin','response','url','fetch','httpsAgent','18095oMVgkF'];_0x5b9e=function(){return _0x175149;};return _0x5b9e();}(function(_0x37eb16,_0x516660){const _0x50e445=_0xe989,_0x229fe4=_0x37eb16();while(!![]){try{const _0x3b2044=parseInt(_0x50e445(0x1c8))/0x1+parseInt(_0x50e445(0x1c1))/0x2+-parseInt(_0x50e445(0x1c0))/0x3+parseInt(_0x50e445(0x1bc))/0x4*(parseInt(_0x50e445(0x1cb))/0x5)+parseInt(_0x50e445(0x1d4))/0x6*(-parseInt(_0x50e445(0x1e0))/0x7)+-parseInt(_0x50e445(0x1e3))/0x8*(parseInt(_0x50e445(0x1ce))/0x9)+parseInt(_0x50e445(0x1c9))/0xa;if(_0x3b2044===_0x516660)break;else _0x229fe4['push'](_0x229fe4['shift']());}catch(_0x1093ae){_0x229fe4['push'](_0x229fe4['shift']());}}}(_0x5b9e,0x25fb2));import _0xd4d86a from'axios';import{HttpsProxyAgent}from'https-proxy-agent';function _0xe989(_0x2eca73,_0x40b3c5){const _0x5b9e3d=_0x5b9e();return _0xe989=function(_0xe98914,_0x1d6a94){_0xe98914=_0xe98914-0x1ba;let _0x56693d=_0x5b9e3d[_0xe98914];return _0x56693d;},_0xe989(_0x2eca73,_0x40b3c5);}import{Helper}from'../utils/helper.js';import _0x505880 from'../utils/logger.js';import'telegram/client/index.js';export class API{constructor(_0x5f4b37,_0xdad2b8,_0x10b7ae,_0x4539ea,_0x498414,_0x14d67f,_0xae5970){const _0x51d1a9=_0xe989;this[_0x51d1a9(0x1dd)]=_0x4539ea,this[_0x51d1a9(0x1be)]=_0xdad2b8,this[_0x51d1a9(0x1d9)]=_0x498414,this[_0x51d1a9(0x1db)]=_0x14d67f,this['referer']=_0xae5970,this['ua']=Helper[_0x51d1a9(0x1ca)](),this['query']=_0x5f4b37,this[_0x51d1a9(0x1d8)]=_0x10b7ae,this[_0x51d1a9(0x1d2)]=undefined,this['axiosInstance']=_0xd4d86a[_0x51d1a9(0x1c2)]({'baseURL':_0x4539ea,'headers':{}});}async[_0x25e0f2(0x1c3)](_0x45b317=this[_0x25e0f2(0x1cd)]){const _0x1a577b=_0x25e0f2,_0x109896={'Accept':_0x1a577b(0x1ba),'Accept-Language':'en-US,en;q=0.9,id;q=0.8','Content-Type':'application/json','Sec-Fetch-Dest':_0x1a577b(0x1cf),'Sec-Fetch-Site':_0x1a577b(0x1bb),'Sec-Fetch-Mode':_0x1a577b(0x1c4),'User-Agent':this['ua'],'Host':this['host'],'Origin':this['origin'],'Referer':this['referer'],'X-Master-Hash':this['masterHash'],'X-Player-Id':this[_0x1a577b(0x1be)][_0x1a577b(0x1d0)]['id']};return _0x45b317&&(_0x109896['Authorization']=_0x1a577b(0x1d6)+_0x45b317),_0x109896;}async[_0x25e0f2(0x1de)](_0x2d3a3b,_0x542a69=_0x25e0f2(0x1d3),_0x55082e,_0x54628e={},_0xab239f={}){const _0x29b155=_0x25e0f2;try{const _0x318b6a=''+this[_0x29b155(0x1dd)]+_0x2d3a3b,_0x7cfcc9={..._0xab239f,...await this[_0x29b155(0x1c3)](_0x55082e)};_0x505880[_0x29b155(0x1c7)](_0x542a69+'\x20:\x20'+_0x318b6a+'\x20'+(this[_0x29b155(0x1d8)]?this[_0x29b155(0x1d8)]:'')),_0x505880[_0x29b155(0x1c7)](_0x29b155(0x1da)+JSON['stringify'](_0x7cfcc9));const _0xbd6159={'method':_0x542a69,'url':_0x318b6a,'headers':_0x7cfcc9};this[_0x29b155(0x1d8)]&&(_0xbd6159[_0x29b155(0x1df)]=new HttpsProxyAgent(this[_0x29b155(0x1d8)]));_0x542a69!==_0x29b155(0x1d3)&&(_0xbd6159['data']=_0x54628e,_0x505880[_0x29b155(0x1c7)](_0x29b155(0x1d5)+JSON[_0x29b155(0x1bf)](_0x54628e)));const _0x4c5e70=await this[_0x29b155(0x1c5)]['request'](_0xbd6159),_0x3ecae4={'status':_0x4c5e70[_0x29b155(0x1cc)],..._0x4c5e70[_0x29b155(0x1e2)]};_0x505880['info'](_0x29b155(0x1d1)+_0x4c5e70['status']+'\x20'+_0x4c5e70['statusText']);let _0x207d84=JSON[_0x29b155(0x1bf)](_0x4c5e70['data']);return _0x207d84['length']>0x96&&(_0x207d84=_0x207d84[_0x29b155(0x1d7)](0x0,0x96)+_0x29b155(0x1c6)),_0x505880[_0x29b155(0x1c7)]('Response\x20Data\x20:\x20'+_0x207d84),_0x3ecae4;}catch(_0x492522){_0x505880['error'](_0x29b155(0x1e1)+_0x492522[_0x29b155(0x1bd)]);if(_0x492522[_0x29b155(0x1dc)]&&_0x492522[_0x29b155(0x1cc)]===0x190){const _0x6925c1={'status':_0x492522['status'],..._0x492522[_0x29b155(0x1dc)][_0x29b155(0x1e2)]};return _0x6925c1;}else throw _0x492522;}}}