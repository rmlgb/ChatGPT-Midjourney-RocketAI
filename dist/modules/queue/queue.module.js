'use strict';const _0x1e3541=_0x286d;(function(_0x1c5a28,_0x43c01f){const _0x284623=_0x286d,_0x1d4168=_0x1c5a28();while(!![]){try{const _0x5d8968=-parseInt(_0x284623(0xcf))/0x1+parseInt(_0x284623(0xd9))/0x2*(-parseInt(_0x284623(0xd8))/0x3)+-parseInt(_0x284623(0xee))/0x4*(-parseInt(_0x284623(0xe2))/0x5)+-parseInt(_0x284623(0xce))/0x6*(-parseInt(_0x284623(0xdd))/0x7)+-parseInt(_0x284623(0xef))/0x8*(-parseInt(_0x284623(0xcd))/0x9)+-parseInt(_0x284623(0xe6))/0xa*(parseInt(_0x284623(0xf2))/0xb)+parseInt(_0x284623(0xe4))/0xc*(parseInt(_0x284623(0xe5))/0xd);if(_0x5d8968===_0x43c01f)break;else _0x1d4168['push'](_0x1d4168['shift']());}catch(_0x437ddb){_0x1d4168['push'](_0x1d4168['shift']());}}}(_0xc7df,0x7eca2));function _0x286d(_0x232cf8,_0x4891be){const _0xc7df4c=_0xc7df();return _0x286d=function(_0x286dcb,_0x38bfcb){_0x286dcb=_0x286dcb-0xcd;let _0x282e55=_0xc7df4c[_0x286dcb];return _0x282e55;},_0x286d(_0x232cf8,_0x4891be);}var __decorate=this&&this[_0x1e3541(0xeb)]||function(_0x4c6f0d,_0x5ab63f,_0x99f0c6,_0xb6b82e){const _0x310ec0=_0x1e3541;var _0xcb9238=arguments[_0x310ec0(0xda)],_0x3e8477=_0xcb9238<0x3?_0x5ab63f:_0xb6b82e===null?_0xb6b82e=Object[_0x310ec0(0xed)](_0x5ab63f,_0x99f0c6):_0xb6b82e,_0x4b6c6e;if(typeof Reflect===_0x310ec0(0xe7)&&typeof Reflect[_0x310ec0(0xd4)]===_0x310ec0(0xd7))_0x3e8477=Reflect[_0x310ec0(0xd4)](_0x4c6f0d,_0x5ab63f,_0x99f0c6,_0xb6b82e);else{for(var _0x44bdbc=_0x4c6f0d[_0x310ec0(0xda)]-0x1;_0x44bdbc>=0x0;_0x44bdbc--)if(_0x4b6c6e=_0x4c6f0d[_0x44bdbc])_0x3e8477=(_0xcb9238<0x3?_0x4b6c6e(_0x3e8477):_0xcb9238>0x3?_0x4b6c6e(_0x5ab63f,_0x99f0c6,_0x3e8477):_0x4b6c6e(_0x5ab63f,_0x99f0c6))||_0x3e8477;}return _0xcb9238>0x3&&_0x3e8477&&Object['defineProperty'](_0x5ab63f,_0x99f0c6,_0x3e8477),_0x3e8477;};Object[_0x1e3541(0xf4)](exports,_0x1e3541(0xec),{'value':!![]}),exports['QueueModule']=void 0x0;const common_1=require(_0x1e3541(0xf1)),queue_controller_1=require('./queue.controller'),queue_service_1=require(_0x1e3541(0xf6)),bull_1=require(_0x1e3541(0xd2)),queue_process_1=require(_0x1e3541(0xdc)),midjourney_entity_1=require(_0x1e3541(0xde)),typeorm_1=require('@nestjs/typeorm');let QueueModule=class QueueModule{};function _0xc7df(){const _0x30ac0e=['121eTKOJC','QueueController','defineProperty','REDIS_PORT','./queue.service','117jWUvWP','90Qzykcu','390615gewOYh','Module','TypeOrmModule','@nestjs/bull','password','decorate','MidjourneyEntity','QueueProcessor','function','1564842TZPzpL','2mABomO','length','registerQueueAsync','./queue.process','241409HkQeiu','../midjourney/midjourney.entity','REDIS_PASSWORD','QueueService','env','5PJqPBW','BullModule','36KrGIzH','6101381HrxJar','670190WCIkeK','object','REDIS_HOST','forFeature','QueueModule','__decorate','__esModule','getOwnPropertyDescriptor','771996ioFssB','31048CImkOP','MJDRAW','@nestjs/common'];_0xc7df=function(){return _0x30ac0e;};return _0xc7df();}QueueModule=__decorate([(0x0,common_1[_0x1e3541(0xd0)])({'imports':[bull_1[_0x1e3541(0xe3)][_0x1e3541(0xdb)]({'name':_0x1e3541(0xf0),'useFactory':()=>{const _0x405e9e=_0x1e3541,_0xfa8f63={'port':+process[_0x405e9e(0xe1)][_0x405e9e(0xf5)],'host':process['env'][_0x405e9e(0xe8)]};return process['env'][_0x405e9e(0xdf)]&&(_0xfa8f63['password']=process[_0x405e9e(0xe1)][_0x405e9e(0xdf)]),{'redis':_0xfa8f63};}}),bull_1[_0x1e3541(0xe3)][_0x1e3541(0xdb)]({'name':'SUNO','useFactory':()=>{const _0x58d8fa=_0x1e3541,_0x475823={'port':+process[_0x58d8fa(0xe1)][_0x58d8fa(0xf5)],'host':process[_0x58d8fa(0xe1)][_0x58d8fa(0xe8)]};return process['env'][_0x58d8fa(0xdf)]&&(_0x475823[_0x58d8fa(0xd3)]=process[_0x58d8fa(0xe1)][_0x58d8fa(0xdf)]),{'redis':_0x475823};}}),typeorm_1[_0x1e3541(0xd1)][_0x1e3541(0xe9)]([midjourney_entity_1[_0x1e3541(0xd5)]])],'controllers':[queue_controller_1[_0x1e3541(0xf3)]],'providers':[queue_service_1[_0x1e3541(0xe0)],queue_process_1[_0x1e3541(0xd6)]]})],QueueModule),exports[_0x1e3541(0xea)]=QueueModule;