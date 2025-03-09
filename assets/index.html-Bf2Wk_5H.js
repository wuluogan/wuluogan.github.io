import{_ as a,c as i,a as t,o as e}from"./app-Ulsq_P74.js";const l={};function n(p,s){return e(),i("div",null,s[0]||(s[0]=[t(`<h2 id="css-variable-fallback" tabindex="-1"><a class="header-anchor" href="#css-variable-fallback"><span>CSS Variable Fallback</span></a></h2><p>CSS 变量越来越多的应用于前端开发中。 但我们可能在使用 CSS 变量的过程中，可能由于某些原因导致 CSS 变量值为空，特别是，如果这个 CSS 变量 的值是通过 JavaScript 控制的。</p><p>下面有一个例子：</p><div class="language-css" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">message__bubble</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  max-width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> calc</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">%</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">--actions-width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><p>变量 <code>--actions-width</code> 在 CSS 函数 <code>calc()</code> 中使用， 它的值通过 JavaScript 控制的。 假设 JavaScript 由于某些原因，设置 <code>--actions-width</code> 的值失败了。 这会导致 <code>calc()</code> 计算的 <code>max-width</code> 值为 无效的，这可能导致 意外的布局问题。</p><p>我们可以提前避免这种情况，给 <code>--actions-width</code> 设置一个 回退值。</p><div class="language-css" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">message__bubble</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  max-width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> calc</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">%</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> var</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">--actions-width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 70</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">));</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><p>如果未定义变量，将使用回退 <code>70px</code> 。 可以使用这种方法避免设置变量可能失败（例如：来自 Javascript）。</p>`,8)]))}const k=a(l,[["render",n],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/defensive-css/variable-fallback/","title":"CSS Variable Fallback","lang":"zh-CN","frontmatter":{"title":"CSS Variable Fallback","author":"鹏展博","createTime":"2023/08/06 16:10:58","permalink":"/defensive-css/variable-fallback/","description":"CSS Variable Fallback CSS 变量越来越多的应用于前端开发中。 但我们可能在使用 CSS 变量的过程中，可能由于某些原因导致 CSS 变量值为空，特别是，如果这个 CSS 变量 的值是通过 JavaScript 控制的。 下面有一个例子： 变量 --actions-width 在 CSS 函数 calc() 中使用， 它的值通过 ...","head":[["meta",{"property":"og:url","content":"https://wlg.us.kg/defensive-css/variable-fallback/"}],["meta",{"property":"og:site_name","content":"WBlog"}],["meta",{"property":"og:title","content":"CSS Variable Fallback"}],["meta",{"property":"og:description","content":"CSS Variable Fallback CSS 变量越来越多的应用于前端开发中。 但我们可能在使用 CSS 变量的过程中，可能由于某些原因导致 CSS 变量值为空，特别是，如果这个 CSS 变量 的值是通过 JavaScript 控制的。 下面有一个例子： 变量 --actions-width 在 CSS 函数 calc() 中使用， 它的值通过 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"鹏展博"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS Variable Fallback\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鹏展博\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.79,"words":236},"git":{},"autoDesc":true,"filePathRelative":"notes/防御性CSS/variable-fallback.md"}');export{k as comp,c as data};
