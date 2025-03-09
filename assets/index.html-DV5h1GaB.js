import{_ as n,c as p,a as h,b as s,d as l,e as k,w as t,r as e,o as d}from"./app-Ulsq_P74.js";const r={},o={class:"language-ts","data-ext":"ts","data-title":"ts"},g={class:"shiki shiki-themes vitesse-light vitesse-dark vp-code twoslash lsp",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0"},y={class:"line"},A={style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},B={class:"line"},D={style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},u={class:"line"},v={style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},m={class:"line"},E={style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},w={style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},f={class:"line"},F={style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},b={style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},C={style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},c={style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},T={style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},x={style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}};function P(K,i){const a=e("v-menu");return d(),p("div",null,[i[64]||(i[64]=h(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2><p>Github: <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/" target="_blank" rel="noopener noreferrer">Pick</a></p><p>实现 TS 内置的 <code>Pick&lt;T, K&gt;</code>，但不可以使用它。</p><p><strong>从类型 T 中选择出属性 K，构造成一个新的类型。</strong></p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Todo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  description</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  completed</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> TodoPreview</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> MyPick</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Todo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">title</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">completed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">todo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">TodoPreview</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Clean room</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  completed</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h2><p>本题需要使用到 <strong>查找类型</strong> 和 <strong>映射类型</strong> 。</p><ul><li><strong>查找类型</strong> 允许通过名称从另一个类型中提取一个新的类型。</li><li><strong>映射类型</strong> 允许将一个类型中的每个属性转换为一个新的类型。</li></ul><p>在这个挑战中，需要从 <code>联合(union) K</code> 中取得所有内容，遍历并返回一个仅包含这些键的新的类型。 同时 <code>联合(union) K</code> 仅能包含 <code>T</code> 的键值。</p><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-ts" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> MyPick</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> K</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> keyof</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  [</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">P</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> in</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> K</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">P</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><p>最终结果为，从 <code>K</code> 中获取所有内容，命名为 <code>P</code> 并将其作为新对象的一个新键，其值的类型取自输入类型。</p><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证"><span>验证</span></a></h2>`,13)),s("div",o,[i[63]||(i[63]=s("button",{class:"copy",title:"复制代码","data-copied":"已复制"},null,-1)),s("pre",g,[s("code",null,[i[52]||(i[52]=h(`<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Todo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
`,2)),s("span",y,[i[2]||(i[2]=s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  ",-1)),s("span",A,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[0]||(i[0]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"Todo"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"title"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},": "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"string")])],-1)])),default:t(()=>[i[1]||(i[1]=s("span",null,"title",-1))]),_:1})]),i[3]||(i[3]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ",-1)),i[4]||(i[4]=s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string",-1))]),i[53]||(i[53]=l(`
`)),s("span",B,[i[7]||(i[7]=s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  ",-1)),s("span",D,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[5]||(i[5]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"Todo"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"description"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},": "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"string")])],-1)])),default:t(()=>[i[6]||(i[6]=s("span",null,"description",-1))]),_:1})]),i[8]||(i[8]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ",-1)),i[9]||(i[9]=s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string",-1))]),i[54]||(i[54]=l(`
`)),s("span",u,[i[12]||(i[12]=s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  ",-1)),s("span",v,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[10]||(i[10]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"Todo"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"."),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"completed"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},": "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"boolean")])],-1)])),default:t(()=>[i[11]||(i[11]=s("span",null,"completed",-1))]),_:1})]),i[13]||(i[13]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ",-1)),i[14]||(i[14]=s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean",-1))]),i[55]||(i[55]=l(`
`)),i[56]||(i[56]=s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")],-1)),i[57]||(i[57]=l(`
`)),i[58]||(i[58]=s("span",{class:"line"},null,-1)),i[59]||(i[59]=l(`
`)),s("span",m,[i[19]||(i[19]=s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type",-1)),i[20]||(i[20]=s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," ",-1)),s("span",E,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[15]||(i[15]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Todo2"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    title"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    completed"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")])])])])],-1)])),default:t(()=>[i[16]||(i[16]=s("span",null,"Todo2",-1))]),_:1})]),i[21]||(i[21]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =",-1)),i[22]||(i[22]=s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," ",-1)),s("span",w,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[17]||(i[17]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," MyPick"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," K"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," keyof"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ["),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"P"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," in"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," K"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]: "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"P"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"];"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }")])],-1)])),default:t(()=>[i[18]||(i[18]=s("span",null,"MyPick",-1))]),_:1})]),i[23]||(i[23]=h('<span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Todo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">title</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">completed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span>',11))]),i[60]||(i[60]=l(`
`)),i[61]||(i[61]=s("span",{class:"line"},null,-1)),i[62]||(i[62]=l(`
`)),s("span",f,[i[36]||(i[36]=s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type",-1)),i[37]||(i[37]=s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," ",-1)),s("span",F,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[24]||(i[24]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Test"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," true")])],-1)])),default:t(()=>[i[25]||(i[25]=s("span",null,"Test",-1))]),_:1})]),i[38]||(i[38]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =",-1)),i[39]||(i[39]=s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," ",-1)),s("span",b,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[26]||(i[26]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Expect"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," true"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T")])],-1)])),default:t(()=>[i[27]||(i[27]=s("span",null,"Expect",-1))]),_:1})]),i[40]||(i[40]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<",-1)),s("span",C,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[28]||(i[28]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Equal"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"X"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Y"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," (<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">()"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," X"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," ?"),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," :"),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 2"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">()"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Y"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," ?"),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," :"),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 2"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," ?"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," true"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," :"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," false")])],-1)])),default:t(()=>[i[29]||(i[29]=s("span",null,"Equal",-1))]),_:1})]),i[41]||(i[41]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<",-1)),s("span",c,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[30]||(i[30]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Todo2"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    title"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    completed"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")])])])])],-1)])),default:t(()=>[i[31]||(i[31]=s("span",null,"Todo2",-1))]),_:1})]),i[42]||(i[42]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",",-1)),i[43]||(i[43]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {",-1)),i[44]||(i[44]=s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," ",-1)),s("span",T,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[32]||(i[32]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"title"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," string")])],-1)])),default:t(()=>[i[33]||(i[33]=s("span",null,"title",-1))]),_:1})]),i[45]||(i[45]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ",-1)),i[46]||(i[46]=s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"string",-1)),i[47]||(i[47]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";",-1)),i[48]||(i[48]=s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," ",-1)),s("span",x,[k(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[34]||(i[34]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"completed"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," boolean")])],-1)])),default:t(()=>[i[35]||(i[35]=s("span",null,"completed",-1))]),_:1})]),i[49]||(i[49]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": ",-1)),i[50]||(i[50]=s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean",-1)),i[51]||(i[51]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }>>",-1))])])])]),i[65]||(i[65]=h('<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><blockquote><ul><li><a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types" target="_blank" rel="noopener noreferrer">查找类型 Lookup Types</a></li><li><a href="https://www.typescriptlang.org/docs/handbook/2/mapped-types.html" target="_blank" rel="noopener noreferrer">映射类型 Mapped Types</a></li><li><a href="https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html" target="_blank" rel="noopener noreferrer">索引访问类型 Indexed Types</a></li></ul></blockquote>',2))])}const M=n(r,[["render",P],["__file","index.html.vue"]]),q=JSON.parse('{"path":"/type-challenges/easy/pick/","title":"实现 Pick","lang":"zh-CN","frontmatter":{"title":"实现 Pick","icon":"ph:check-bold","createTime":"2022/11/30 12:49:20","permalink":"/type-challenges/easy/pick/","description":"题目 Github: Pick 实现 TS 内置的 Pick<T, K>，但不可以使用它。 从类型 T 中选择出属性 K，构造成一个新的类型。 解题思路 本题需要使用到 查找类型 和 映射类型 。 查找类型 允许通过名称从另一个类型中提取一个新的类型。 映射类型 允许将一个类型中的每个属性转换为一个新的类型。 在这个挑战中，需要从 联合(union) ...","head":[["meta",{"property":"og:url","content":"https://wlg.us.kg/type-challenges/easy/pick/"}],["meta",{"property":"og:site_name","content":"WBlog"}],["meta",{"property":"og:title","content":"实现 Pick"}],["meta",{"property":"og:description","content":"题目 Github: Pick 实现 TS 内置的 Pick<T, K>，但不可以使用它。 从类型 T 中选择出属性 K，构造成一个新的类型。 解题思路 本题需要使用到 查找类型 和 映射类型 。 查找类型 允许通过名称从另一个类型中提取一个新的类型。 映射类型 允许将一个类型中的每个属性转换为一个新的类型。 在这个挑战中，需要从 联合(union) ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"实现 Pick\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.17,"words":351},"git":{},"autoDesc":true,"filePathRelative":"notes/type-challenges/简单/4.pick.md"}');export{M as comp,q as data};
