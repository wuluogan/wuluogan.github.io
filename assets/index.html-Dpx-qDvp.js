import{_ as i,c as e,a as n,o as s}from"./app-Ulsq_P74.js";const a={};function o(p,t){return s(),e("div",null,t[0]||(t[0]=[n(`<h2 id="button-minimum-width" tabindex="-1"><a class="header-anchor" href="#button-minimum-width"><span>Button Minimum Width</span></a></h2><p>一个常见的错误是假设按钮宽度应等于其内容加水平填充。 这对于单语言网站（例如：英语）可能如预期般工作，但对于多语言网站很容易出现意外的问题。</p><p>请看以下示例：</p><div class="demo-wrapper"><div class="demo-head"><div class="demo-ctrl"><i></i><i></i><i></i></div></div><div class="demo-container"><p>英语： <button type="button" class="btn-width-1339">Done</button></p><p>中文： <button type="button" class="btn-width-1339">完成</button></p><p>阿拉伯语： <button type="button" class="btn-width-1339">تم</button></p></div></div><p>可以看到， 在 英语 和 中文 下， 按钮的宽度表现很好，因为其内容足够长。 但是在 阿拉伯语 中， 按钮的宽度就很窄，从拥护体验来说，这很不友好， 因为对一个主要的按钮来说，它的表现应该足够的直观，方便用户操作。</p><p>为避免这种情况，我们可以提前设置按钮的最小宽度。</p><div class="language-css" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  min-width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 90</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><div class="demo-wrapper"><div class="demo-head"><div class="demo-ctrl"><i></i><i></i><i></i></div></div><div class="demo-container"><p>英语： <button type="button" class="btn-width-1339 min">Done</button></p><p>中文： <button type="button" class="btn-width-1339 min">完成</button></p><p>阿拉伯语： <button type="button" class="btn-width-1339 min">تم</button></p></div></div>`,8)]))}const l=i(a,[["render",o],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/defensive-css/button-minimum-width/","title":"Button Minimum Width","lang":"zh-CN","frontmatter":{"title":"Button Minimum Width","author":"鹏展博","createTime":"2023/08/12 10:00:16","permalink":"/defensive-css/button-minimum-width/","description":"Button Minimum Width 一个常见的错误是假设按钮宽度应等于其内容加水平填充。 这对于单语言网站（例如：英语）可能如预期般工作，但对于多语言网站很容易出现意外的问题。 请看以下示例： 英语： Done 中文： 完成 阿拉伯语： تم 可以看到， 在 英语 和 中文 下， 按钮的宽度表现很好，因为其内容足够长。 但是在 阿拉伯语 中， 按...","head":[["meta",{"property":"og:url","content":"https://wlg.us.kg/defensive-css/button-minimum-width/"}],["meta",{"property":"og:site_name","content":"WBlog"}],["meta",{"property":"og:title","content":"Button Minimum Width"}],["meta",{"property":"og:description","content":"Button Minimum Width 一个常见的错误是假设按钮宽度应等于其内容加水平填充。 这对于单语言网站（例如：英语）可能如预期般工作，但对于多语言网站很容易出现意外的问题。 请看以下示例： 英语： Done 中文： 完成 阿拉伯语： تم 可以看到， 在 英语 和 中文 下， 按钮的宽度表现很好，因为其内容足够长。 但是在 阿拉伯语 中， 按..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"鹏展博"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Button Minimum Width\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鹏展博\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.04,"words":311},"git":{},"autoDesc":true,"filePathRelative":"notes/防御性CSS/button-minimum-width.md"}');export{l as comp,c as data};
