import{_ as e,c as p,a as l,b as s,d as k,e as h,w as t,r as n,o as r}from"./app-Ulsq_P74.js";const d={},o={class:"language-ts","data-ext":"ts","data-title":"ts"},g={class:"shiki shiki-themes vitesse-light vitesse-dark vp-code twoslash lsp",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0"},y={class:"line"},A={style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},c={style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},u={class:"line"},B={style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},C={style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},F={style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},v={style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}};function E(D,i){const a=n("v-menu");return r(),p("div",null,[i[28]||(i[28]=l('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2><p>Github: <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/" target="_blank" rel="noopener noreferrer">Concat</a></p><p>在类型系统里实现 JavaScript 内置的 <code>Array.concat</code> 方法，这个类型接受两个参数， 返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。</p><div class="language-ts" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Result</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Concat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">],</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]&gt;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // expected to be [1, 2]</span></span></code></pre></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h2><p>泛型参数 <code>T</code> <code>U</code> 约束为可变元组类型，通过 数组展开，合并到新的数组中。</p><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-ts" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Concat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[],</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> U</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [...</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ...</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">U</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span></code></pre></div><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证"><span>验证</span></a></h2>',9)),s("div",o,[i[27]||(i[27]=s("button",{class:"copy",title:"复制代码","data-copied":"已复制"},null,-1)),s("pre",g,[s("code",null,[s("span",y,[i[4]||(i[4]=s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type",-1)),i[5]||(i[5]=s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," ",-1)),s("span",A,[h(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[0]||(i[0]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Result"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ["),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 2"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]")])],-1)])),default:t(()=>[i[1]||(i[1]=s("span",null,"Result",-1))]),_:1})]),i[6]||(i[6]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =",-1)),i[7]||(i[7]=s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," ",-1)),s("span",c,[h(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[2]||(i[2]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Concat"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," unknown"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[],"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," U"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," unknown"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[]>"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," [..."),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ..."),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"U"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]")])],-1)])),default:t(()=>[i[3]||(i[3]=s("span",null,"Concat",-1))]),_:1})]),i[8]||(i[8]=l('<span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">],</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]&gt;</span>',6))]),i[24]||(i[24]=k(`
`)),i[25]||(i[25]=s("span",{class:"line"},null,-1)),i[26]||(i[26]=k(`
`)),s("span",u,[i[17]||(i[17]=s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type",-1)),i[18]||(i[18]=s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," ",-1)),s("span",B,[h(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[9]||(i[9]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," test"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," true")])],-1)])),default:t(()=>[i[10]||(i[10]=s("span",null,"test",-1))]),_:1})]),i[19]||(i[19]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =",-1)),i[20]||(i[20]=s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," ",-1)),s("span",C,[h(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[11]||(i[11]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Expect"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," true"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T")])],-1)])),default:t(()=>[i[12]||(i[12]=s("span",null,"Expect",-1))]),_:1})]),i[21]||(i[21]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<",-1)),s("span",F,[h(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[13]||(i[13]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Equal"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"X"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Y"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," (<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">()"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," X"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," ?"),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," :"),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 2"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">()"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," T"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Y"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," ?"),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," :"),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 2"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," ?"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," true"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," :"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," false")])],-1)])),default:t(()=>[i[14]||(i[14]=s("span",null,"Equal",-1))]),_:1})]),i[22]||(i[22]=s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<",-1)),s("span",v,[h(a,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:t(({})=>i[15]||(i[15]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"type"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," Result"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ["),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 2"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]")])],-1)])),default:t(()=>[i[16]||(i[16]=s("span",null,"Result",-1))]),_:1})]),i[23]||(i[23]=l('<span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]&gt;&gt;</span>',6))])])])]),i[29]||(i[29]=s("h2",{id:"参考",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考"},[s("span",null,"参考")])],-1)),i[30]||(i[30]=s("blockquote",null,[s("ul",null,[s("li",null,[s("a",{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types",target:"_blank",rel:"noopener noreferrer"},"可变元组 Variadic Tuple Types")])])],-1))])}const m=e(d,[["render",E],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/type-challenges/easy/concat/","title":"Concat","lang":"zh-CN","frontmatter":{"title":"Concat","icon":"ph:check-bold","createTime":"2022/12/01 04:17:30","permalink":"/type-challenges/easy/concat/","description":"题目 Github: Concat 在类型系统里实现 JavaScript 内置的 Array.concat 方法，这个类型接受两个参数， 返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。 解题思路 泛型参数 T U 约束为可变元组类型，通过 数组展开，合并到新的数组中。 答案 验证 参考 可变元组 Variadic Tuple Types","head":[["meta",{"property":"og:url","content":"https://wlg.us.kg/type-challenges/easy/concat/"}],["meta",{"property":"og:site_name","content":"WBlog"}],["meta",{"property":"og:title","content":"Concat"}],["meta",{"property":"og:description","content":"题目 Github: Concat 在类型系统里实现 JavaScript 内置的 Array.concat 方法，这个类型接受两个参数， 返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。 解题思路 泛型参数 T U 约束为可变元组类型，通过 数组展开，合并到新的数组中。 答案 验证 参考 可变元组 Variadic Tuple Types"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Concat\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.64,"words":191},"git":{},"autoDesc":true,"filePathRelative":"notes/type-challenges/简单/533.concat.md"}');export{m as comp,f as data};
