import{_ as a,c as r,b as t,a as o,e as i,w as p,r as s,o as d,d as l}from"./app-Ulsq_P74.js";const c={};function u(h,e){const n=s("RouteLink");return d(),r("div",null,[e[1]||(e[1]=t("p",null,[t("a",{href:"https://staging-cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},[t("img",{src:"https://img.shields.io/badge/vue-%403-brightgreen",alt:"vue@3"})])],-1)),e[2]||(e[2]=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"提问"),t("p",null,"vue3 有哪几种组件通信方式？")],-1)),e[3]||(e[3]=t("p",null,"在vue2 中能够使用的 组件通信方式，在 vue3 中同样的都能够使用，但有部分有区别，同时，还扩展了其他的通信方式",-1)),t("p",null,[i(n,{to:"/interview-question/1ryrldbc/"},{default:p(()=>e[0]||(e[0]=[l("vue2 组件通信方式")])),_:1})]),e[4]||(e[4]=o('<h2 id="组件通信方式" tabindex="-1"><a class="header-anchor" href="#组件通信方式"><span>组件通信方式</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>仅列出跟vue2有区别的部分，以及新增的方式</p></div><h3 id="parent-refs-expose" tabindex="-1"><a class="header-anchor" href="#parent-refs-expose"><span>$parent / refs / expose</span></a></h3><p>相比于 vue3 ，vue2 删除了 <code>$children</code> ，可以使用 <code>refs</code> 获取子组件的实例。</p><p>子组件还可以通过 <code>expose</code> 选项 控制允许哪些内容暴露给父组件</p><p>适用场景：</p><ul><li>父子组件通信</li></ul><h3 id="attr" tabindex="-1"><a class="header-anchor" href="#attr"><span>$attr</span></a></h3><p>在 vue3 中， 已经移除了 <code>$listener</code>， 并将其合并到了 <code>$attr</code> 中，所以可以直接使用 <code>attr</code>向后代组件传递数据</p><h3 id="共享响应式对象" tabindex="-1"><a class="header-anchor" href="#共享响应式对象"><span>共享响应式对象</span></a></h3><p>使用 <code>reactive</code> 创建一个响应式对象，并在不同组件中导入它。</p><p>这种方式可以创建一个简单的共享状态管理， 但由于任何导入它的组件都可以对其进行修改，这种做法不好维护。 而且仅适用于纯客户端前端页面，如果需要使用 <code>SSR</code>，那么这种方式可能会导致 <strong>跨请求状态污染</strong></p><p>适用场景：</p><ul><li>父子组件通信</li><li>兄弟组件通信</li><li>隔代组件通信</li></ul><p>这种方式虽然可以进行各种组件间关系的通信，但不适合用于有复杂变更状态的场景。</p><h3 id="pinia" tabindex="-1"><a class="header-anchor" href="#pinia"><span>Pinia</span></a></h3><p>一个 替代 <code>Vuex</code> 的 状态管理库。</p>',17))])}const g=a(c,[["render",u],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/interview-question/yrfvyyod/","title":"组件通信方式","lang":"zh-CN","frontmatter":{"title":"组件通信方式","createTime":"2022/04/23 11:00:22","author":"pengzhanbo","permalink":"/interview-question/yrfvyyod/","description":"vue@3 提问 vue3 有哪几种组件通信方式？ 在vue2 中能够使用的 组件通信方式，在 vue3 中同样的都能够使用，但有部分有区别，同时，还扩展了其他的通信方式 组件通信方式 相关信息 仅列出跟vue2有区别的部分，以及新增的方式 $parent / refs / expose 相比于 vue3 ，vue2 删除了 $children ，可以...","head":[["meta",{"property":"og:url","content":"https://wlg.us.kg/interview-question/yrfvyyod/"}],["meta",{"property":"og:site_name","content":"WBlog"}],["meta",{"property":"og:title","content":"组件通信方式"}],["meta",{"property":"og:description","content":"vue@3 提问 vue3 有哪几种组件通信方式？ 在vue2 中能够使用的 组件通信方式，在 vue3 中同样的都能够使用，但有部分有区别，同时，还扩展了其他的通信方式 组件通信方式 相关信息 仅列出跟vue2有区别的部分，以及新增的方式 $parent / refs / expose 相比于 vue3 ，vue2 删除了 $children ，可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.shields.io/badge/vue-%403-brightgreen"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组件通信方式\\",\\"image\\":[\\"https://img.shields.io/badge/vue-%403-brightgreen\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.34,"words":402},"git":{},"autoDesc":true,"filePathRelative":"notes/面试题/Vue/v3/组件通信方式.md"}');export{g as comp,m as data};
