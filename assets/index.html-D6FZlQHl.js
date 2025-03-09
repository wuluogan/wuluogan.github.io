import{_ as o,c as t,a as i,o as r}from"./app-Ulsq_P74.js";const n={};function a(c,e){return r(),t("div",null,e[0]||(e[0]=[i('<div class="hint-container tip"><p class="hint-container-title">提问</p><ol><li>vue3 中 <code>v-if</code> 和 <code>v-for</code> 哪个优先级高？</li><li>两个同时使用时，该如何优化？</li></ol></div><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h2><p>当 <code>v-if</code> 和 <code>v-for</code> 同时使用时， <code>v-if</code> 的优先级总是 高于 <code>v-for</code>。</p><p>这是 vue3 和 vue2 的其中一个重要的区别点。</p><p>在 vue3 中，最好不要同时使用 <code>v-if</code> 和 <code>v-for</code>。</p><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h2><p>同时使用时，由于优先级的原因，总是先执行判断，确认条件为 true是，才进行渲染和执行循环。</p><p>如果需要对 列表中的每一项做条件判断：</p><ul><li>在 <code>v-if</code> 所在的列表项外部包裹 一个 <code>&lt;template&gt;</code>， 在 <code>template</code> 上定义 <code>v-for</code> 和 <code>key</code></li><li>提前使用 computed 属性 过滤掉不需要的列表项，避免在模板渲染中不必要的判断和渲染</li></ul>',9)]))}const p=o(n,[["render",a],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/interview-question/45rxs5yv/","title":"v-if和v-for优先级","lang":"zh-CN","frontmatter":{"title":"v-if和v-for优先级","createTime":"2022/04/24 01:33:45","author":"pengzhanbo","permalink":"/interview-question/45rxs5yv/","description":"提问 vue3 中 v-if 和 v-for 哪个优先级高？ 两个同时使用时，该如何优化？ 优先级 当 v-if 和 v-for 同时使用时， v-if 的优先级总是 高于 v-for。 这是 vue3 和 vue2 的其中一个重要的区别点。 在 vue3 中，最好不要同时使用 v-if 和 v-for。 优化 同时使用时，由于优先级的原因，总是先执行...","head":[["meta",{"property":"og:url","content":"https://wlg.us.kg/interview-question/45rxs5yv/"}],["meta",{"property":"og:site_name","content":"WBlog"}],["meta",{"property":"og:title","content":"v-if和v-for优先级"}],["meta",{"property":"og:description","content":"提问 vue3 中 v-if 和 v-for 哪个优先级高？ 两个同时使用时，该如何优化？ 优先级 当 v-if 和 v-for 同时使用时， v-if 的优先级总是 高于 v-for。 这是 vue3 和 vue2 的其中一个重要的区别点。 在 vue3 中，最好不要同时使用 v-if 和 v-for。 优化 同时使用时，由于优先级的原因，总是先执行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"v-if和v-for优先级\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.74,"words":222},"git":{},"autoDesc":true,"filePathRelative":"notes/面试题/Vue/v3/v-if和v-for优先级.md"}');export{p as comp,d as data};
