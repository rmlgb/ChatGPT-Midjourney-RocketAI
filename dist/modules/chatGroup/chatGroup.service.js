'use strict';const _0x3e3b54=_0x1c24;(function(_0x22c914,_0x57fc6f){const _0x46f589=_0x1c24,_0x3c181d=_0x22c914();while(!![]){try{const _0xb8fcf=-parseInt(_0x46f589(0x12e))/0x1+parseInt(_0x46f589(0x11e))/0x2*(-parseInt(_0x46f589(0x116))/0x3)+-parseInt(_0x46f589(0x111))/0x4*(parseInt(_0x46f589(0x100))/0x5)+-parseInt(_0x46f589(0x101))/0x6+parseInt(_0x46f589(0x12c))/0x7+-parseInt(_0x46f589(0x114))/0x8*(-parseInt(_0x46f589(0xed))/0x9)+parseInt(_0x46f589(0xf4))/0xa*(parseInt(_0x46f589(0x118))/0xb);if(_0xb8fcf===_0x57fc6f)break;else _0x3c181d['push'](_0x3c181d['shift']());}catch(_0x5c3e86){_0x3c181d['push'](_0x3c181d['shift']());}}}(_0x477b,0x52d81));function _0x1c24(_0x35ccd1,_0x2e6b6d){const _0x477be7=_0x477b();return _0x1c24=function(_0x1c2435,_0x1afd1a){_0x1c2435=_0x1c2435-0xe8;let _0x235ccd=_0x477be7[_0x1c2435];return _0x235ccd;},_0x1c24(_0x35ccd1,_0x2e6b6d);}var __decorate=this&&this[_0x3e3b54(0x11f)]||function(_0x1305ac,_0x7315c6,_0x26a64b,_0x499d3c){const _0x454672=_0x3e3b54;var _0x389745=arguments[_0x454672(0x112)],_0x530bc7=_0x389745<0x3?_0x7315c6:_0x499d3c===null?_0x499d3c=Object[_0x454672(0x11b)](_0x7315c6,_0x26a64b):_0x499d3c,_0x1cc603;if(typeof Reflect===_0x454672(0xe8)&&typeof Reflect[_0x454672(0xf2)]==='function')_0x530bc7=Reflect['decorate'](_0x1305ac,_0x7315c6,_0x26a64b,_0x499d3c);else{for(var _0x5974c6=_0x1305ac[_0x454672(0x112)]-0x1;_0x5974c6>=0x0;_0x5974c6--)if(_0x1cc603=_0x1305ac[_0x5974c6])_0x530bc7=(_0x389745<0x3?_0x1cc603(_0x530bc7):_0x389745>0x3?_0x1cc603(_0x7315c6,_0x26a64b,_0x530bc7):_0x1cc603(_0x7315c6,_0x26a64b))||_0x530bc7;}return _0x389745>0x3&&_0x530bc7&&Object['defineProperty'](_0x7315c6,_0x26a64b,_0x530bc7),_0x530bc7;},__metadata=this&&this['__metadata']||function(_0xb44da7,_0xf604fa){const _0x32c8c3=_0x3e3b54;if(typeof Reflect===_0x32c8c3(0xe8)&&typeof Reflect[_0x32c8c3(0xf5)]===_0x32c8c3(0xfd))return Reflect[_0x32c8c3(0xf5)](_0xb44da7,_0xf604fa);},__param=this&&this[_0x3e3b54(0xf0)]||function(_0x4a31ac,_0xbebd3a){return function(_0x19dc65,_0x524df0){_0xbebd3a(_0x19dc65,_0x524df0,_0x4a31ac);};};function _0x477b(){const _0x1480c4=['config','save','DESC','850563efxOfr','AppEntity','627711AeZpKR','object','parse','应用对话名称不能修改哟！','非法操作、您在使用一个未启用的应用！','log','18CRVwpS','HttpException','appEntity','__param','非法操作、您在使用一个不存在的应用！','decorate','modelsService','30TlzGkV','metadata','当前应用已经开启了一个对话无需新建了！','user','query','删除成功','isSticky','BAD_REQUEST','undefined','function','assign','HttpStatus','320IXrNOC','527598IvUeIR','title','Repository','删除失败！','chatGroupEntity','map','filter','__esModule','update','appId','getBaseConfig','@nestjs/typeorm','Injectable','ChatGroupEntity','del','find','14756cWSOlf','length','更新对话失败！','620064aeESdL','create','15NlEHzY','../app/app.entity','4989193CeYYXE','ChatGroupService','stringify','getOwnPropertyDescriptor','管理员未配置任何AI模型、请先联系管理员开通聊天模型配置！','InjectRepository','138458MtycaH','__decorate','error:\x20','coverImg','../models/models.service','appLogo','affected','非法操作、您在删除一个非法资源！','defineProperty','includes','findOne'];_0x477b=function(){return _0x1480c4;};return _0x477b();}Object[_0x3e3b54(0x126)](exports,_0x3e3b54(0x108),{'value':!![]}),exports[_0x3e3b54(0x119)]=void 0x0;const common_1=require('@nestjs/common'),chatGroup_entity_1=require('./chatGroup.entity'),typeorm_1=require(_0x3e3b54(0x10c)),typeorm_2=require('typeorm'),app_entity_1=require(_0x3e3b54(0x117)),models_service_1=require(_0x3e3b54(0x122));let ChatGroupService=class ChatGroupService{constructor(_0xab23cd,_0x455033,_0x34620d){const _0x1a6ce8=_0x3e3b54;this[_0x1a6ce8(0x105)]=_0xab23cd,this[_0x1a6ce8(0xef)]=_0x455033,this['modelsService']=_0x34620d;}async[_0x3e3b54(0x115)](_0x13d4c8,_0x401e17){const _0x54f9eb=_0x3e3b54,{id:_0x31d0ca}=_0x401e17[_0x54f9eb(0xf7)],{appId:_0xef3255}=_0x13d4c8,_0x88aa3a={'title':'新对话','userId':_0x31d0ca};if(_0xef3255){const _0x2a83bc=await this[_0x54f9eb(0xef)]['findOne']({'where':{'id':_0xef3255}});if(!_0x2a83bc)throw new common_1[(_0x54f9eb(0xee))](_0x54f9eb(0xf1),common_1[_0x54f9eb(0xff)]['BAD_REQUEST']);else{const {status:_0x5733a1,name:_0x2a915b}=_0x2a83bc,_0x6ba842=await this[_0x54f9eb(0x105)]['count']({'where':{'userId':_0x31d0ca,'appId':_0xef3255,'isDelete':![]}});if(_0x6ba842>0x0)throw new common_1[(_0x54f9eb(0xee))](_0x54f9eb(0xf6),common_1[_0x54f9eb(0xff)]['BAD_REQUEST']);if(![0x1,0x3,0x4,0x5][_0x54f9eb(0x127)](_0x5733a1))throw new common_1[(_0x54f9eb(0xee))](_0x54f9eb(0xeb),common_1[_0x54f9eb(0xff)][_0x54f9eb(0xfb)]);_0x2a915b&&(_0x88aa3a[_0x54f9eb(0x102)]=_0x2a915b),_0xef3255&&(_0x88aa3a[_0x54f9eb(0x10a)]=_0xef3255);}}const _0x5a0b80=await this[_0x54f9eb(0xf3)][_0x54f9eb(0x10b)](_0xef3255);_0xef3255&&(_0x5a0b80[_0x54f9eb(0x10a)]=_0xef3255);if(!_0x5a0b80)throw new common_1['HttpException'](_0x54f9eb(0x11c),common_1['HttpStatus']['BAD_REQUEST']);return await this['chatGroupEntity'][_0x54f9eb(0x12a)](Object['assign'](Object[_0x54f9eb(0xfe)]({},_0x88aa3a),{'config':JSON[_0x54f9eb(0x11a)](_0x5a0b80)}));}async[_0x3e3b54(0xf8)](_0x594426){const _0x5449d7=_0x3e3b54;try{const {id:_0x2ba6d7}=_0x594426[_0x5449d7(0xf7)],_0x1b2bf6={'userId':_0x2ba6d7,'isDelete':![]},_0x1aa003=await this['chatGroupEntity'][_0x5449d7(0x110)]({'where':_0x1b2bf6,'order':{'isSticky':_0x5449d7(0x12b),'id':'DESC'}}),_0x3992c2=_0x1aa003[_0x5449d7(0x107)](_0x28a5cd=>_0x28a5cd[_0x5449d7(0x10a)])['map'](_0x18a348=>_0x18a348[_0x5449d7(0x10a)]),_0x35db98=await this['appEntity']['find']({'where':{'id':(0x0,typeorm_2['In'])(_0x3992c2)}});return _0x1aa003[_0x5449d7(0x106)](_0x3a543f=>{const _0x440cae=_0x5449d7;var _0x1a4e69;return _0x3a543f[_0x440cae(0x123)]=(_0x1a4e69=_0x35db98[_0x440cae(0x110)](_0x182dba=>_0x182dba['id']===_0x3a543f[_0x440cae(0x10a)]))===null||_0x1a4e69===void 0x0?void 0x0:_0x1a4e69[_0x440cae(0x121)],_0x3a543f;});}catch(_0x2b4134){console[_0x5449d7(0xec)](_0x5449d7(0x120),_0x2b4134);}}async[_0x3e3b54(0x109)](_0x4127ba,_0x2285bf){const _0x182273=_0x3e3b54,{title:_0x3c4ba9,isSticky:_0x11d818,groupId:_0x193e23,config:_0x5e860b,updateAppId:updateAppId=0x0}=_0x4127ba;console['log'](_0x4127ba);const {id:_0x575806}=_0x2285bf[_0x182273(0xf7)],_0x13b7df=await this[_0x182273(0x105)][_0x182273(0x128)]({'where':{'id':_0x193e23,'userId':_0x575806}});if(!_0x13b7df)throw new common_1[(_0x182273(0xee))]('请先选择一个对话或者新加一个对话再操作！',common_1[_0x182273(0xff)][_0x182273(0xfb)]);const {appId:_0x262bdf}=_0x13b7df;if(_0x262bdf&&!_0x3c4ba9)try{const _0x5546ac=JSON[_0x182273(0xe9)](_0x5e860b);if(Number(_0x5546ac['keyType'])!==0x1)throw new common_1[(_0x182273(0xee))](_0x182273(0xea),common_1['HttpStatus'][_0x182273(0xfb)]);}catch(_0x2cfdfa){}const _0x46c66e={};_0x3c4ba9&&(_0x46c66e[_0x182273(0x102)]=_0x3c4ba9),typeof _0x11d818!==_0x182273(0xfc)&&(_0x46c66e[_0x182273(0xfa)]=_0x11d818),_0x5e860b&&(_0x46c66e[_0x182273(0x129)]=_0x5e860b);updateAppId!==0x0&&(_0x46c66e[_0x182273(0x10a)]=updateAppId);console[_0x182273(0xec)](updateAppId),console[_0x182273(0xec)](_0x46c66e);const _0x121e13=await this[_0x182273(0x105)]['update']({'id':_0x193e23},_0x46c66e);if(_0x121e13['affected'])return!![];else throw new common_1[(_0x182273(0xee))](_0x182273(0x113),common_1[_0x182273(0xff)]['BAD_REQUEST']);}async[_0x3e3b54(0x10f)](_0x147f69,_0x4abf5f){const _0xa04d40=_0x3e3b54,{groupId:_0x247568}=_0x147f69,{id:_0x58b891}=_0x4abf5f[_0xa04d40(0xf7)],_0x1979a3=await this[_0xa04d40(0x105)][_0xa04d40(0x128)]({'where':{'id':_0x247568,'userId':_0x58b891}});if(!_0x1979a3)throw new common_1['HttpException'](_0xa04d40(0x125),common_1[_0xa04d40(0xff)][_0xa04d40(0xfb)]);const _0x42420e=await this[_0xa04d40(0x105)][_0xa04d40(0x109)]({'id':_0x247568},{'isDelete':!![]});if(_0x42420e[_0xa04d40(0x124)])return _0xa04d40(0xf9);else throw new common_1[(_0xa04d40(0xee))](_0xa04d40(0x104),common_1[_0xa04d40(0xff)][_0xa04d40(0xfb)]);}async['delAll'](_0x3d49e1){const _0x41b621=_0x3e3b54,{id:_0x8e20e5}=_0x3d49e1[_0x41b621(0xf7)],_0x27a9ec=await this[_0x41b621(0x105)][_0x41b621(0x109)]({'userId':_0x8e20e5,'isSticky':![],'isDelete':![]},{'isDelete':!![]});if(_0x27a9ec[_0x41b621(0x124)])return _0x41b621(0xf9);else throw new common_1[(_0x41b621(0xee))](_0x41b621(0x104),common_1[_0x41b621(0xff)]['BAD_REQUEST']);}async['getGroupInfoFromId'](_0x176163){const _0x14101f=_0x3e3b54;if(!_0x176163)return;return await this[_0x14101f(0x105)][_0x14101f(0x128)]({'where':{'id':_0x176163}});}};ChatGroupService=__decorate([(0x0,common_1[_0x3e3b54(0x10d)])(),__param(0x0,(0x0,typeorm_1[_0x3e3b54(0x11d)])(chatGroup_entity_1[_0x3e3b54(0x10e)])),__param(0x1,(0x0,typeorm_1['InjectRepository'])(app_entity_1[_0x3e3b54(0x12d)])),__metadata('design:paramtypes',[typeorm_2['Repository'],typeorm_2[_0x3e3b54(0x103)],models_service_1['ModelsService']])],ChatGroupService),exports['ChatGroupService']=ChatGroupService;