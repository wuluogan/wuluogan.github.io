import{_ as i,c as a,a as e,o as t}from"./app-Ulsq_P74.js";const n={};function p(l,s){return t(),a("div",null,s[0]||(s[0]=[e(`<p><code>pnpm</code> 是一款新兴不久的包管理器，相比于 <code>npm</code> 和 <code>yarn</code>，<code>pnpm</code> 拥有更快的安装速度，同时节约磁盘空间。</p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p><img src="https://pnpm.io/zh/img/pnpm-no-name-with-frame.svg" alt="pnpm"></p><p><code>pnpm</code> 是一个类似于 <code>npm</code> 、<code>yarn</code> 的包管理器。</p><p><code>pnpm</code> 安装的包都会被存储在硬盘的某个相同位置，软甲包通过硬链接到这个位置，实现共享同一版本的依赖， 对于同一依赖的不同版本，<code>pnpm update</code> 时，只会向存储中心添加新版本更新的文件，而不是仅仅应为一个文件的改变而复制整个新版本包的内容。</p><p><code>pnpm</code> 内置支持 <code>monorepo</code>，即单仓库多包。</p><h2 id="比较" tabindex="-1"><a class="header-anchor" href="#比较"><span>比较</span></a></h2><h3 id="pnpm-yarn-npm" tabindex="-1"><a class="header-anchor" href="#pnpm-yarn-npm"><span>pnpm/yarn/npm</span></a></h3><table><thead><tr><th>功能</th><th style="text-align:center;">pnpm</th><th style="text-align:center;">yarn</th><th style="text-align:center;">npm</th></tr></thead><tbody><tr><td>工作空间支持（monorepo）</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td></tr><tr><td>隔离的<code>node_modules</code></td><td style="text-align:center;">✔️ - 默认</td><td style="text-align:center;">✔️</td><td style="text-align:center;">❌</td></tr><tr><td>提升的<code>node_modules</code></td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️ -默认</td></tr><tr><td>自动安装peers</td><td style="text-align:center;">✔️ - <code>auto-install-peers=true</code></td><td style="text-align:center;">❌</td><td style="text-align:center;">✔️</td></tr><tr><td>Plug&#39;n&#39;Play</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️ - 默认</td><td style="text-align:center;">❌</td></tr><tr><td>零安装</td><td style="text-align:center;">❌</td><td style="text-align:center;">✔️</td><td style="text-align:center;">❌</td></tr><tr><td>修复依赖项</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">❌</td></tr><tr><td>管理nodejs版本</td><td style="text-align:center;">✔️</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td>有锁文件</td><td style="text-align:center;">✔️ - <code>pnpm-lock.yaml</code></td><td style="text-align:center;">✔️ - <code>yarn.lock</code></td><td style="text-align:center;">✔️ - <code>package-lock.json</code></td></tr><tr><td>支持覆盖</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️ - <code>resolutions</code></td><td style="text-align:center;">✔️</td></tr><tr><td>内容可寻址存储</td><td style="text-align:center;">✔️</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td>动态包执行</td><td style="text-align:center;">✔️ - <code>pnpm dlx</code></td><td style="text-align:center;">✔️ - <code>yarn dlx</code></td><td style="text-align:center;">✔️ - <code>npx</code></td></tr><tr><td>Side-effects cache</td><td style="text-align:center;">✔️</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr></tbody></table><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h3><p>与 <code>yarn/npm</code> 不同的是，<code>pnpm</code> 并非采用 <em>扁平的<code>node_modules</code></em> 来管理依赖项， 而是基于符号链接的<code>node_modules</code> 结构。</p><p><code>node_modules</code> 中每个包的每个文件都是来自内容可寻址存储的硬链接。 假设安装了依赖于 <code>bar@1.0.0</code> 的 <code>foo@1.0.0</code>。 <code>pnpm</code> 会将两个包硬链接到 <code>node_modules</code> 如下所示：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">node_modules</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">└──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .pnpm</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    ├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bar@1.0.0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    │</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> node_modules</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    │</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">       └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bar</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stor</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/bar</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    │</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">           ├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> index.js</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    │</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">           └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> foo@1.0.0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> node_modules</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">            └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> foo</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stor</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/foo</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">                ├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> index.js</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">                └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> package.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是 <code>node_modules</code> 中的唯一的“真实”文件。 一旦所有包都硬链接到 <code>node_modules</code>， 就会创建符号链接来构建嵌套的依赖关系图结构。</p><p><code>bar</code> 将被符号链接到 <code>foo@1.0.0/node_modules</code> 文件夹，然后处理依赖关系，<code>foo</code> 将被符号链接至根目录的 <code>node_modules</code> 文件夹:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">node_modules</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> foo</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./.pnpm/foo@1.0.0/node_modules/foo</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">└──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .pnpm</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    ├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bar@1.0.0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    │</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> node_modules</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    │</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">       └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bar</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stor</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/bar</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> foo@1.0.0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> node_modules</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">            ├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> foo</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stor</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/foo</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">            └──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bar</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ../../bar@1.0.0/node_modules/bar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种布局的好处在于，只有真正在依赖项中的包才能访问。 如果是平铺的 <code>node_modules</code> 结构，所有被提升的包都可以访问。</p><h3 id="优势" tabindex="-1"><a class="header-anchor" href="#优势"><span>优势</span></a></h3><ul><li><p>节约磁盘空间</p><p>包存储在全局存储中，pnpm 创建从全局存储到项目下 <code>node_modules</code> 文件夹的 硬链接，硬链接指向磁盘上原始文件所在的同一位置。不同软件包可以共享相同依赖项所占用的空间。</p><p>如果是单个依赖的不同版本，如版本更新，<code>pnpm</code> 仅安装版本更新的文件，而不是全量安装整个新版本的包。</p></li><li><p>安装速度快</p><p>软件包中安装依赖时，如果检索到在本地的全局存储中已安装过该依赖，那么不会从网络下重新安装，而是直接创建硬链接到软件包中。</p></li><li><p>内置支持 monorepo</p><p>支持 单仓库多包，通过 <code>pnpm-workspace.yaml</code> 配置工作空间，通过 <code>workspace:*</code> 协议引用工作空间的依赖包。</p></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="通过-npm-安装" tabindex="-1"><a class="header-anchor" href="#通过-npm-安装"><span>通过 npm 安装</span></a></h3><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm</span></span></code></pre></div><h3 id="通过-corepack-安装" tabindex="-1"><a class="header-anchor" href="#通过-corepack-安装"><span>通过 Corepack 安装</span></a></h3><p>从 v16.13 开始，Node.js 发布了 <code>Corepack</code> 来管理包管理器。 这是一项实验性功能，因此需要通过运行如下脚本来启用它：</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">corpack</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> enabled</span></span></code></pre></div><p>这将自动在系统上安装 pnpm。 但是，它可能不是最新版本的 pnpm。 若要升级，请检查 <a href="https://github.com/pnpm/pnpm/releases/tag/v7.9.1" target="_blank" rel="noopener noreferrer">最新的 pnpm 版本</a> 并运行：</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">corepack</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> prepare</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">versio</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">n</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --activate</span></span></code></pre></div><h3 id="使用独立脚本安装" tabindex="-1"><a class="header-anchor" href="#使用独立脚本安装"><span>使用独立脚本安装</span></a></h3><p>在 POSIX 系统上，即使没有安装 Node.js，也可以使用以下脚本安装 pnpm：</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -fsSL</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://get.pnpm.io/install.sh</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> -</span></span></code></pre></div><p>如果没有安装 <code>curl</code> ，也可以使用 <code>wget</code>:</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">wget</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -qO-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://get.pnpm.io/install.sh</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> -</span></span></code></pre></div><p>在 Windows 系统中，如果使用 Powershell:</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">iwr</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://get.pnpm.io/install.ps1</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -useb</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> iex</span></span></code></pre></div><h3 id="使用-homebrew-安装" tabindex="-1"><a class="header-anchor" href="#使用-homebrew-安装"><span>使用 Homebrew 安装</span></a></h3><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">brew</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm</span></span></code></pre></div><h3 id="使用-scoop-安装" tabindex="-1"><a class="header-anchor" href="#使用-scoop-安装"><span>使用 Scoop 安装</span></a></h3><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">scoop</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nodejs-lts</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm</span></span></code></pre></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p><code>pnpm</code> 在使用上 与 <code>npm</code> 、<code>yarn</code> 的使用上差别不大，但需要注意的区别，<code>pnpm</code> 会严格校验所有参数， 比如，<code>pnpm install --target_arch x64</code> 会执行失败，因为 <code>--target_arch x64</code> 不是 <code>pnpm install</code> 的有效参数。</p><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h3><h4 id="pnpm-install" tabindex="-1"><a class="header-anchor" href="#pnpm-install"><span><code>pnpm install</code></span></a></h4><p>别名 <code>pnpm i</code></p><p>等效于 <code>npm install</code> / <code>yarn</code></p><p>用于安装项目所有依赖。</p><p><a href="https://pnpm.io/zh/cli/install" target="_blank" rel="noopener noreferrer">pnpm install 官方文档</a></p><h4 id="pnpm-add-pkg" tabindex="-1"><a class="header-anchor" href="#pnpm-add-pkg"><span><code>pnpm add &lt;pkg&gt;</code></span></a></h4><p>安装软件包及其依赖的任何软件包。 默认情况下，任何新软件包都安装为生产依赖项。</p><p><a href="https://pnpm.io/zh/cli/add" target="_blank" rel="noopener noreferrer">pnpm add 官方文档</a></p><h4 id="pnpm-remove" tabindex="-1"><a class="header-anchor" href="#pnpm-remove"><span><code>pnpm remove</code></span></a></h4><p>别名： <code>rm</code> <code>uninstall</code> <code>un</code></p><p>从 <code>node_modules</code> 和项目的 <code>package.json</code> 中删除相关 packages。</p><p><a href="https://pnpm.io/zh/cli/remove" target="_blank" rel="noopener noreferrer">pnpm remove 官方文档</a></p><h4 id="pnpm-update" tabindex="-1"><a class="header-anchor" href="#pnpm-update"><span><code>pnpm update</code></span></a></h4><p>别名： <code>up</code> <code>upgrade</code></p><p><code>pnpm update</code> 根据指定的范围更新软件包的最新版本。</p><p>在不带参数的情况下使用时，将更新所有依赖关系。 您可以使用一些模式来更新特定的依赖项。</p><p><a href="https://pnpm.io/zh/cli/update" target="_blank" rel="noopener noreferrer">pnpm update 官方文档</a></p><p>更多命令请查阅<a href="https://pnpm.io/zh/cli/add" target="_blank" rel="noopener noreferrer">官方文档</a></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><h4 id="npmrc" tabindex="-1"><a class="header-anchor" href="#npmrc"><span><code>.npmrc</code></span></a></h4><p><code>pnpm</code> 从命令行、环境变量和 <code>.npmrc</code> 文件中获取其配置。</p><p><code>pnpm config</code> 命令可用于更新和编辑 用户和全局 .npmrc 文件的内容。</p><p>四个相关文件分别为：</p><ul><li>每个项目的配置文件（<code>/path/to/my/project/.npmrc</code>）</li><li>每个工作区的配置文件（包含 <code>pnpm-workspace.yaml</code> 文件的目录）</li><li>每位用户的配置文件（ <code>~/.npmrc</code> ）</li><li>全局配置文件（ <code>/etc/.npmrc</code> ）</li></ul><h4 id="pnpm-workspace-yaml" tabindex="-1"><a class="header-anchor" href="#pnpm-workspace-yaml"><span><code>pnpm-workspace.yaml</code></span></a></h4><p><code>pnpm-workspace.yaml</code> 定义了 工作空间 的根目录，并能够使工作空间中包含 / 排除目录 。 默认情况下，包含所有子目录。</p><div class="language-yaml" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">packages</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 定义 packages 目录下的所有子目录都为一个 package</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">packages/*</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 定义 components 目录下的所有子目录都为一个 package</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">components/**</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 排除任何目录中的 test 目录下的所有目录</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">!**/test/**</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span></code></pre></div><h2 id="工作空间" tabindex="-1"><a class="header-anchor" href="#工作空间"><span>工作空间</span></a></h2><p>pnpm 内置了对单一存储库（也称为多包存储库、多项目存储库或单体存储库）的支持， 你可以创建一个 workspace 以将多个项目合并到一个仓库中。</p><p>一个 workspace 的根目录下必须有 <code>pnpm-workspace.yaml</code> 文件， 也可能会有 <code>.npmrc</code> 文件。</p><h3 id="workspace-协议-workspace" tabindex="-1"><a class="header-anchor" href="#workspace-协议-workspace"><span>Workspace 协议 (workspace:)</span></a></h3><p>默认情况下，如果可用的 packages 与已声明的可用范围相匹配，pnpm 将从工作区链接这些 packages。 例如，如果 <code>bar</code> 中有 <code>&quot;foo&quot;：&quot;^1.0.0&quot;</code> 的这个依赖项，则 <code>foo@1.0.0</code> 链接到 <code>bar</code> 。 但是，如果 <code>bar</code> 的依赖项中有 <code>&quot;foo&quot;: &quot;2.0.0&quot;</code>，而 <code>foo@2.0.0</code> 在工作空间中并不存在，则将从 <code>npm registry</code> 安装 <code>foo@2.0.0</code> 。 这种行为带来了一些不确定性。</p><p>幸运的是，pnpm 支持 workspace 协议 <code>workspace:</code> 。 当使用此协议时，pnpm 将拒绝解析除本地 workspace 包含的 package 之外的任何内容。 因此，如果设置为 <code>&quot;foo&quot;: &quot;workspace:2.0.0&quot;</code> 时，安装将会失败，因为 <code>&quot;foo@2.0.0&quot;</code> 不存在于此 workspace 中。</p><p>使用示例：</p><p>工作空间中存在以下项目：</p><div class="language-sh" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">+</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> packages/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  +</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> foo/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  +</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bar/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  +</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> qar/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  +</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zoo/</span></span></code></pre></div><p>如果各个项目以其目录名作为其 package name，那么可以在其他项目中如下引入依赖：</p><div class="language-json" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">dependencies</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">foo</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">workspace:*</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">bar</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">workspace:~</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">qar</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">workspace:^</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">zoo</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">workspace:^1.5.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>引入依赖的包名，是由包的 <code>package.json name</code> 确定，而不是 workspace 目录下的目录名确定。</p></div><h3 id="发布-workspace" tabindex="-1"><a class="header-anchor" href="#发布-workspace"><span>发布 Workspace</span></a></h3><p>当以上示例进行发布时，会被转换为</p><div class="language-json" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">dependencies</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">foo</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1.5.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">bar</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">~1.5.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">qar</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">^1.5.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">zoo</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">^1.5.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><p>这个功能允许你发布转化之后的包到远端，并且可以正常使用本地 workspace 中的 packages，而不需要其它中间步骤。包的使用者也可以像常规的包那样正常使用，且仍然可以受益于语义化版本。</p>`,84)]))}const d=i(n,[["render",p],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/article/84nu27cz/","title":"pnpm 包管理器","lang":"zh-CN","frontmatter":{"title":"pnpm 包管理器","createTime":"2022/05/10 03:50:47","author":"pengzhanbo","tags":["node"],"permalink":"/article/84nu27cz/","description":"pnpm 是一款新兴不久的包管理器，相比于 npm 和 yarn，pnpm 拥有更快的安装速度，同时节约磁盘空间。 介绍 pnpm pnpm 是一个类似于 npm 、yarn 的包管理器。 pnpm 安装的包都会被存储在硬盘的某个相同位置，软甲包通过硬链接到这个位置，实现共享同一版本的依赖， 对于同一依赖的不同版本，pnpm update 时，只会向存...","head":[["meta",{"property":"og:url","content":"https://wlg.us.kg/article/84nu27cz/"}],["meta",{"property":"og:site_name","content":"WBlog"}],["meta",{"property":"og:title","content":"pnpm 包管理器"}],["meta",{"property":"og:description","content":"pnpm 是一款新兴不久的包管理器，相比于 npm 和 yarn，pnpm 拥有更快的安装速度，同时节约磁盘空间。 介绍 pnpm pnpm 是一个类似于 npm 、yarn 的包管理器。 pnpm 安装的包都会被存储在硬盘的某个相同位置，软甲包通过硬链接到这个位置，实现共享同一版本的依赖， 对于同一依赖的不同版本，pnpm update 时，只会向存..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pnpm.io/zh/img/pnpm-no-name-with-frame.svg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"node"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pnpm 包管理器\\",\\"image\\":[\\"https://pnpm.io/zh/img/pnpm-no-name-with-frame.svg\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":6.15,"words":1845},"git":{},"autoDesc":true,"filePathRelative":"blog/10.开发/pnpm.md","categoryList":[{"id":"126ac9","sort":10000,"name":"blog"},{"id":"884b3f","sort":10,"name":"开发"}]}');export{d as comp,k as data};
