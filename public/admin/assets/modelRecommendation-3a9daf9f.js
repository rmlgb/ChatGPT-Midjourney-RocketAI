import{d as h,c as t,o as l,e as r,h as o,i as n,f as e,J as x,K as A,t as I,L as v,l as C,F as k}from"./index-a2cde0ca.js";const P={class:"w-full flex flex-col p-4 gap-4"},g={class:"flex items-center gap-1"},y=e("div",{class:"flex flex-col font-bold gap-1 py-1"},[e("div",null,"官方中转API推荐"),e("div",null,"为了功能简化和部分用户无稳定API渠道，系统提供中转API渠道")],-1),T={class:"flex flex-col gap-2"},w=e("div",{class:"font-bold flex justify-between"},[e("span",null,"官方中转站")],-1),E={class:"font-bold flex justify-between items-center"},j={class:"flex space-x-[15px]"},F=e("span",{class:"text-[#1EC419] font-bold"},"前往中转站",-1),N=e("hr",null,null,-1),B=e("div",{class:"text-[16px] font-bold"},"中转说明:",-1),G=["innerHTML"],O=h({__name:"modelRecommendation",setup(L){function d(c){window.open(c)}const _=[{name:"益丰 API",href:"https://api.ephone.ai",desc:`❤️ 无需科学上网，全球直连，无封号风险，请求速度是个人账号的1200倍 <br />
❤️ 无需模型权限，直接使用最新模型，无需开发基础，一个API key全模型通用 <br />
❤️ 完全兼容OpenAI接口协议，支持无缝对接所有模型到各种支持OpenAI接口的应用！ <br />
❤️ 100％保障隐私，仅做API中转 <br />
❤️ 享受我们的渠道优势，价格远低于官方 <br />
❤️ 支持全球超多模型（200+）、各种渠道，价格 & 质量都有保证，承诺假一赔十 <br />
❤️ 不限时发放福利，1元超低价享受OpenAI官转`,recommend:!0},{name:"GPTNB",href:"https://gptnb.me/",desc:` 1.为了系统的清晰迭代和发展，目前已经移除国内模型直连功能（自v3版本开始），所有模型统一使用OpenAI的输入格式。如需使用国内模型，可通过中转API接入。
            本系统的中转API主要支持GPT模型，这些模型通过官方原生KEY进行高并发的稳定中转，非逆向处理。此外，系统也支持一些逆向渠道模型，用户可根据需求选择使用其他第三方中转API。
            <br />2.支持当前流行的suno-v3AI音乐生成模型。
            <br />3.支持包括Claude3在内的大型模型，如claude-3-haiku、claude-3-sonnet和claude-3-opus。
            <br />4.MJ三种不同模式的API路径设置： Fast模式路径: /mj -
            这是标准模式，用于快速处理请求，适合大部分标准应用场景。
            Relax模式路径: /mj-relax/mj -
            这个路径用于放松模式，可能处理速度稍慢，但适合于不需要即时反馈的情况。
            Turbo模式路径: /mj-turbo/mj -
            Turbo模式提供更快的处理速度，适用于需要极速反应的应用场景。
            <br />5.支持国内外多种主流大模型，包括百度的ERNIE-4.0-8K、ERNIE-3.5-8K，讯飞的SparkDesk系列，腾讯的ChatStd，智谱的ChatGLM系列，阿里的qwen-turbo和qwen-72b，360智脑的360GPT_S2_V9，月之暗面的MoonshotAl，微软的必应，谷歌的Gemini官方模型，零一万物的yi-34b-chat-0205，以及百川的Baichuan2-Turbo等。
            <br />6.有关更多最新支持模型的信息和详细变动，请前往官方演示站查看。`,recommend:!0}];return(c,M)=>{const i=t("CircleCheckFilled"),u=t("el-icon"),p=t("el-alert"),a=t("el-card"),f=t("el-tag"),m=t("el-button");return l(),r("div",P,[o(a,null,{default:n(()=>[o(p,{type:"success",closable:!1},{default:n(()=>[e("div",g,[o(u,{size:"30"},{default:n(()=>[o(i)]),_:1}),y])]),_:1})]),_:1}),o(a,null,{default:n(()=>[e("div",T,[w,(l(),r(x,null,A(_,(s,b)=>e("div",{key:b,class:"p-4 border flex flex-col gap-4 rounded-[6px]"},[e("div",E,[e("div",j,[e("span",null,"中转名称: "+I(s.name),1),s.recommend?(l(),v(f,{key:0,type:"success"},{default:n(()=>[C("推荐")]),_:1})):k("",!0)]),o(m,{bg:"",color:"#F3FCEA",onClick:V=>d(s.href)},{default:n(()=>[F]),_:2},1032,["onClick"])]),N,B,e("div",{class:"font-[500] text-[14px] text-[#6e7072]",innerHTML:s.desc},null,8,G)])),64))])]),_:1})])}}});export{O as default};
