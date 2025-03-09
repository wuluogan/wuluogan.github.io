import{_ as i,c as a,a as n,o as h}from"./app-Ulsq_P74.js";const l={};function t(k,s){return h(),a("div",null,s[0]||(s[0]=[n(`<blockquote><p>施工中...</p></blockquote><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p><a href="https://github.com/type-challenges/type-challenges" target="_blank" rel="noopener noreferrer">type-challenges</a> 是一个能够让你更好的 了解 <code>typescript</code> 类型系统的开源项目。</p><p>本笔记整理记录了我个人在解答这个项目中的挑战，所使用的解题思路，回答，以及相关的 <code>typescript</code> 知识点。</p><p>根据 <a href="https://github.com/type-challenges/type-challenges" target="_blank" rel="noopener noreferrer">type-challenges</a> 的题目难度， 分为了五个难度：</p><ul><li><code>热身</code> <span class="tc-p"><span style="width:100%;"></span></span> <span>1 / 1</span></li><li><code>简单</code> <span class="tc-p"><span style="width:100%;"></span></span> <span>13 / 13</span></li><li><code>中等</code> <span class="tc-p"><span style="width:calc((57/103)*100%);"></span></span> <span>57 / 103</span></li><li><code>困难</code> <span class="tc-p"><span style="width:0%;"></span></span> <span>0 / 43</span></li><li><code>地狱</code> <span class="tc-p"><span style="width:0%;"></span></span> <span>0 / 14</span></li></ul><p>请从上到下依次阅读本笔记，以便更好的了解 <code>type-challenges</code> 的挑战。</p><p>如果你是新手，或者仅想在你的日常工作中用好 <code>typescript</code>，那么阅读到 <code>中等</code> 难度的题目就足够了。 从 <code>困难</code> 难度开始，这些题目可能更适合于 想要深入理解某些库或框架的类型设计，或者想要编写自己的类型工具的开发者。</p><h2 id="vscode-插件" tabindex="-1"><a class="header-anchor" href="#vscode-插件"><span>VSCode 插件</span></a></h2><p><a href="https://marketplace.visualstudio.com/items?itemName=YRM.type-challenges" target="_blank" rel="noopener noreferrer">vsCode插件 type-challenges</a></p><p>插件提供了开源项目的所有题目，以及测试用例，可以通过在 <code>VSCode</code> 中安装该插件，在 <code>VSCode</code> 中进行答题， 以获得良好的 编辑器类型检查帮助。</p><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><p>在这个项目中，每一个挑战都将作为单独的文章进行编写。其内容包括:</p><ul><li><strong>题目</strong>：提出的挑战</li><li><strong>解题思路</strong></li><li><strong>答案</strong></li><li><strong>验证</strong>：借助 <a href="https://theme-plume.vuejs.press/guide/markdown/twoslash/" target="_blank" rel="noopener noreferrer">typescript twoslash</a> 的帮助，你可以在这里查看答案中每一处的类型，以及验证结果是否符合预期</li><li><strong>参考</strong>：列出这个挑战需要使用的 <code>typescript</code> 知识点</li></ul><h2 id="类型工具" tabindex="-1"><a class="header-anchor" href="#类型工具"><span>类型工具</span></a></h2><p>在 验证 过程中，将会使用到以下的类型工具：</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * 类型断言</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Expect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> ExpectTrue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> ExpectFalse</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> IsTrue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> IsFalse</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * 比较两个类型是否完全相等</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Equal</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">X</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Y</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> X</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ?</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> :</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Y</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ?</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> :</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  ?</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> true</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  :</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> false</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> NotEqual</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">X</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Y</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> true</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Equal</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">X</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Y</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ?</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> false</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> :</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * 判断类型是否为 \`any\`</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> IsAny</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ?</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> true</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> :</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> false</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> NotAny</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> true</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> IsAny</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ?</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> false</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> :</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Debug</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">K</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> in</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> keyof</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">K</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">] }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> MergeInsertions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> object</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">K</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> in</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> keyof</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">MergeInsertions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">K</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]&gt; }</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> :</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * 判断两个类型是否相似</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Alike</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">X</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Y</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Equal</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">MergeInsertions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">X</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;,</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> MergeInsertions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Y</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * 判断一个类型是否继承于另一个类型</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> ExpectExtends</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">VALUE</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> EXPECTED</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> EXPECTED</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> VALUE</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ?</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> true</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> :</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> false</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * 判断一个函数的参数是否符合预期</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> ExpectValidArgs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span></span>
<span class="line"><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">  FUNC</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">any</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[])</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> any</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">  ARGS</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> any</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> ARGS</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Parameters</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">FUNC</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ?</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> true</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> :</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * 将联合类型转换为交叉类型</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> UnionToIntersection</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">U</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">U</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> any</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">k</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">U</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> void</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> :</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> never</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  k</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">infer</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> I</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> void</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  ?</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> I</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  :</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> never</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const e=i(l,[["render",t],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/type-challenges/","title":"Type Challenges","lang":"zh-CN","frontmatter":{"title":"Type Challenges","createTime":"2022/11/29 11:53:46","author":"pengzhanbo","permalink":"/type-challenges/","description":"施工中... 简介 type-challenges 是一个能够让你更好的 了解 typescript 类型系统的开源项目。 本笔记整理记录了我个人在解答这个项目中的挑战，所使用的解题思路，回答，以及相关的 typescript 知识点。 根据 type-challenges 的题目难度， 分为了五个难度： 热身 1 / 1 简单 13 / 13 中等 ...","head":[["meta",{"property":"og:url","content":"https://wlg.us.kg/type-challenges/"}],["meta",{"property":"og:site_name","content":"WBlog"}],["meta",{"property":"og:title","content":"Type Challenges"}],["meta",{"property":"og:description","content":"施工中... 简介 type-challenges 是一个能够让你更好的 了解 typescript 类型系统的开源项目。 本笔记整理记录了我个人在解答这个项目中的挑战，所使用的解题思路，回答，以及相关的 typescript 知识点。 根据 type-challenges 的题目难度， 分为了五个难度： 热身 1 / 1 简单 13 / 13 中等 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Type Challenges\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":2.78,"words":833},"git":{},"autoDesc":true,"filePathRelative":"notes/type-challenges/README.md"}');export{e as comp,r as data};
