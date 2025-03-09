import{_ as e,c as t,a,o as i}from"./app-Ulsq_P74.js";const n={};function o(l,s){return i(),t("div",null,s[0]||(s[0]=[a(`<p><strong>跨域资源共享（CORS）</strong> 是一种基于 <strong>HTTP Header</strong> 的机制。 该机制通过允许服务器标示除了它自己的 origin（域，协议和端口），使这些 origin 有权限访问加载服务器上的资源。</p><p>跨域资源共享 通过 <strong>预检请求</strong> 的机制，检查服务器是否允许要发送的真实请求。 浏览器向服务器发送一个到服务器托管的跨域资源 <strong>预检请求</strong>， 在预检请求中，浏览器发送的头部中标示有HTTP方法和真实请求会用到的头。</p><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>浏览器出于安全性的原因，会限制脚本内发起的跨域资源请求， 比如 <strong>XMLHttpRequest</strong> 和 <strong>Fetch API</strong> 遵循 <strong>同源策略</strong>，默认情况下不允许发起非同源的资源请求。 使用这些API的Web应用，只能加载从应用程序的同一个域的请求HTTP资源， <strong>除非响应报文中包含了正确的CORS响应头</strong></p><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>跨域资源共享 新增了一组 HTTP首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。 同时，对于可能对服务器数据产生副作用的 HTTP 请求方法，浏览器必须首先使用 <code>OPTIONS</code> 方法发起一个预检请求， 从而获取服务器是否允许跨域请求，服务器确认允许之后，才发起实际的HTTP请求。</p><p>CORS 请求失败会产生错误，但是为了安全，在 JavaScript 代码中，是无法获取具体是哪里出了问题。 我们只能通过查看浏览器的控制台来获取具体出现的错误。</p><p>若要开启 CORS ，我们需要配置 CORS 相关的 HTTP首部字段。</p><h2 id="http-响应首部字段" tabindex="-1"><a class="header-anchor" href="#http-响应首部字段"><span>HTTP 响应首部字段</span></a></h2><p>在 CORS 中，HTTP 响应首部字段主要有以下几个：</p><ul><li><strong>Access-Control-Allow-Origin</strong></li><li><strong>Access-Control-Allow-Methods</strong></li><li><strong>Access-Control-Allow-Headers</strong></li><li><strong>Access-Control-Max-Age</strong></li><li><strong>Access-Control-Expose-Headers</strong></li><li><strong>Access-Control-Allow-Credentials</strong></li></ul><h3 id="access-control-allow-origin" tabindex="-1"><a class="header-anchor" href="#access-control-allow-origin"><span>Access-Control-Allow-Origin</span></a></h3><p><strong>Access-Control-Allow-Origin</strong> 响应首部字段，用于 <strong>指定允许访问该资源的外域URI</strong>。</p><p>对于不需要携带身份凭证的请求，服务器可以指定改字段的值为通配符(<code>*</code>)，表示允许来自所有域的请求。</p><p>语法：</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Allow-Origin: &lt;origin&gt;</span></span>
<span class="line"><span>Access-Control-Allow-Origin: *</span></span></code></pre></div><p>如果服务器 指定了具体的域名而非 <code>*</code>，那么响应首部中的 <strong>Vary</strong> 字段的值必须包含 <code>Origin</code>。 用于告诉客户端：服务器对不同的源站返回不同的内容。</p><div class="hint-container info"><p class="hint-container-title">注意</p><p>当响应的是附带身份凭证的请求时，服务端 必须 明确 <strong>Access-Control-Allow-Origin</strong> 的值，而不能使用通配符<code>“*”</code>。</p></div><p><strong>示例1：</strong></p><p>允许所有域访问</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Allow-Origin: *</span></span></code></pre></div><p><strong>示例2：</strong></p><p>允许来自 <a href="https://pengzhanbo.cn" target="_blank" rel="noopener noreferrer">https://pengzhanbo.cn</a> 的请求</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Allow-Origin: https://pengzhanbo.cn</span></span>
<span class="line"><span>Vary: Origin</span></span></code></pre></div><h3 id="access-control-allow-methods" tabindex="-1"><a class="header-anchor" href="#access-control-allow-methods"><span>Access-Control-Allow-Methods</span></a></h3><p><strong>Access-Control-Allow-Methods</strong> 响应首部字段用于 预检请求的响应。 <strong>指明了实际请求所允许使用的HTTP方法或方法列表</strong>。</p><p>语法：</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Allow-Methods: &lt;method&gt;[, &lt;method&gt;]*</span></span></code></pre></div><p>示例：</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Allow-Methods: POST, GET, OPTIONS</span></span></code></pre></div><h3 id="access-control-allow-headers" tabindex="-1"><a class="header-anchor" href="#access-control-allow-headers"><span>Access-Control-Allow-Headers</span></a></h3><p><strong>Access-Control-Allow-Headers</strong> 响应首部字段用于 预检请求的响应。 <strong>指明了实际请求中允许携带的首部字段</strong>。</p><p>语法：</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Allow-Headers: &lt;header-name&gt;[, header-name]*</span></span>
<span class="line"><span>Access-Control-Allow-Headers: *</span></span></code></pre></div><p>以下特定的首部是一直允许的，无需特意声明他们：</p><ul><li>Accept</li><li>Accept-Language</li><li>Content-Language</li><li>Content-Type，但只在其值属于MIME类型 <code>application/x-www-form-urlencoded</code>,<code>multipart/form-data</code>,<code>text/pain</code> 中的一种。</li></ul><p><strong>示例1：</strong></p><p>自定义请求头。 除了 CORS 安全清单列出的请求头外，支持 自定义请求头 X-Custom-Header</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Allow-Headers: X-Custom-Header</span></span></code></pre></div><p><strong>示例2：</strong></p><p>多个自定义请求头。</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Allow-Headers: X-Custom-Header, X-My-Header</span></span></code></pre></div><h3 id="access-control-max-age" tabindex="-1"><a class="header-anchor" href="#access-control-max-age"><span>Access-Control-Max-Age</span></a></h3><p><strong>Access-Control-Max-Age</strong> 响应首部字段表示 <strong>预检请求的返回结果可以被缓存多久</strong>。</p><p>返回结果是指： <strong>Access-Control-Allow-Methods</strong> 和 <strong>Access-Control-Allow-Headers</strong> 提供的信息。</p><p>语法：</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Max-Age: &lt;delta-seconds&gt;</span></span></code></pre></div><p><strong>delta-seconds</strong> 表示返回结果可以被缓存的最长时间（秒）。 在 Firefox 中， 上限是 <strong>24小时（86400秒）</strong>。 在 Chromium 中，上限是 <strong>2小时（7200秒）</strong>，同时 Chromium 还规定了默认值是 <strong>5秒</strong>。 如果值为 <strong>-1</strong> ， 表示禁用缓存，则每次请求前都需要使用 OPTIONS 预检请求。</p><p><strong>示例：</strong></p><p>将预检请求缓存 10分钟：</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Max-Age: 600</span></span></code></pre></div><h3 id="access-control-expose-headers" tabindex="-1"><a class="header-anchor" href="#access-control-expose-headers"><span>Access-Control-Expose-Headers</span></a></h3><p><strong>Access-Control-Expose-Headers</strong> 响应首部字段，列出了 哪些首部可以作为响应的一部分暴露给外部。</p><p>在 跨源访问时，XMLHttpRequest 对象的 <code>getResponseHeader()</code> 方法默认只能拿到一些最基本的响应头。</p><p>默认情况下，只有七种 简单响应首部 可以暴露给外部:</p><ul><li>Cache-Control</li><li>Content-Language</li><li>Content-Length</li><li>Content-Type</li><li>Expires</li><li>Last-Modified</li><li>Pragma</li></ul><p>如果期望让客户端可以访问到其他的首部信息，可以将它们 该字段受列出来。</p><p>语法：</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Expose-Headers: &lt;header-name&gt;[, &lt;header-name&gt;]*</span></span></code></pre></div><p><strong>示例：</strong></p><p>暴露一个非简单响应首部：</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Expose-Headers: X-My-Header</span></span></code></pre></div><p>暴露多个非简单响应首部：</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Expose-Headers: X-My-Header, X-Custom-Header</span></span></code></pre></div><h3 id="access-control-allow-credentials" tabindex="-1"><a class="header-anchor" href="#access-control-allow-credentials"><span>Access-Control-Allow-Credentials</span></a></h3><p><strong>Access-Control-Allow-Credentials</strong> 响应首部字段 用于在 请求包含 Credentials 时， 告知浏览器是否可以将对请求的响应暴露给前端 JavaScript 代码。</p><p>当请求的 Credentials 模式 （Request.credentials）为 <code>include</code> 时，浏览器尽在相应头 <strong>Access-Control-Allow-Credentials</strong> 的值为 <code>true</code> 时将响应暴露给前端的 JavaScript 代码。</p><p>Credentials 可以是 <code>cookies</code>、 <code>authorization headers</code> 或 <code>TLS client certificates</code>。</p><p>语法：</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Allow-Credentials: true</span></span></code></pre></div><p><strong>Access-Control-Allow-Credentials</strong> 需要与 <code>XMLHttpRequest.withCredentials</code> 或 <strong>Fetch API</strong> 的 <code>Request()</code> 构造函数中的 <code>credentials</code> 选项结合使用。 Credentials 必须在前后端都被配置，才能使带 credentials 的 CORS 请求成功。</p><p><strong>示例：</strong></p><p>允许 credentials</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Allow-Credentials: true</span></span></code></pre></div><p>使用带 credentials 的 XHR:</p><div class="language-js" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> xhr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> XMLHttpRequest</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">xhr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">open</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">GET</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://pengzhanbo.cn</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">xhr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">withCredentials</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">xhr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">send</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>使用带 credentials 的 Fetch:</p><div class="language-js" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">fetch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://pengzhanbo.cn</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  credentials</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><h2 id="http-请求首部字段" tabindex="-1"><a class="header-anchor" href="#http-请求首部字段"><span>HTTP 请求首部字段</span></a></h2><p>在 CORS 中，可用于发起跨域请求的首部字段，如下：</p><ul><li>Origin</li><li>Access-Control-Request-Method</li><li>Access-Control-Request-Headers</li></ul><p>这些首部字段无需手动设置。</p><p>当开发者使用 XMLHttpRequest 发起跨域请求时，它们已经被设置就绪。</p><h3 id="origin" tabindex="-1"><a class="header-anchor" href="#origin"><span>Origin</span></a></h3><p><strong>Origin</strong> 请求首部字段表明预检请求或实际请求的源站。</p><p>语法：</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Origin: &lt;origin&gt;</span></span></code></pre></div><p>origin 参数的值为源站的URI。不包含任何路径信息，仅表示服务器名称。</p><h3 id="access-control-request-method" tabindex="-1"><a class="header-anchor" href="#access-control-request-method"><span>Access-Control-Request-Method</span></a></h3><p><strong>Access-Control-Request-Method</strong> 请求首部字段用于预检请求。作用是 将实际情况所使用的HTTP方法告诉服务器。</p><p>语法：</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Request-Method: &lt;method&gt;</span></span></code></pre></div><h3 id="access-control-request-headers" tabindex="-1"><a class="header-anchor" href="#access-control-request-headers"><span>Access-Control-Request-Headers</span></a></h3><p><strong>Access-Control-Request-Headers</strong> 请求首部字段用于预检请求。作用是 将实际请求所携带的首部字段告诉服务器。</p><p>语法：</p><div class="language-" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Access-Control-Request-Headers: &lt;header-name&gt;[, &lt;header-name&gt;]*</span></span></code></pre></div><h2 id="预检请求" tabindex="-1"><a class="header-anchor" href="#预检请求"><span>预检请求</span></a></h2><p>一个 CORS 预检请求时用于 检查服务器使用支持 CORS， 即 跨域资源共享。</p><p>预检请求 通过 发送一个 OPTIONS 请求，请求头部包含了以下字段：</p><ul><li>Access-Control-Request-Method</li><li>Access-Control-Request-Headers</li><li>Origin</li></ul><p>浏览器会在有必要的时候，自动发出一个预检请求。</p><p>所以在正常情况下，前端开发者不需要自己去发送这样的请求。</p><h3 id="预检请求与凭据" tabindex="-1"><a class="header-anchor" href="#预检请求与凭据"><span>预检请求与凭据</span></a></h3><p>CORS 预检请求不能包含凭据。预检请求的响应必须指定 Access-Control-Allow-Credentials: true 来表明可以携带凭据进行实际的请求。</p><h2 id="简单请求" tabindex="-1"><a class="header-anchor" href="#简单请求"><span>简单请求</span></a></h2><p>某些情况下，不会触发 CORS预检请求，这样的请求，可表述为 <em>简单请求</em>。</p><p>若请求满足以下所有条件，则可视为 简单请求：</p><ul><li>使用 GET, HEAD POST 请求方法</li><li>除了被用户代理自动设置的首部字段（Connection，User-Agent等）， 以及在 Fetch 规范中定义为 <a href="https://fetch.spec.whatwg.org/#forbidden-header-name" target="_blank" rel="noopener noreferrer">禁用首部名称</a> 的其他首部， 允许人为设置的字段为 Fetch 规范定义的 对 <a href="https://fetch.spec.whatwg.org/#cors-safelisted-request-header" target="_blank" rel="noopener noreferrer">CORS 安全的首部字段集合</a></li><li>请求中任意的 XMLHttpRequest 对象均没有注册任何监听事件， XMLHttpRequest 对象可以使用 XMLHttpRequest.upload 属性访问。</li><li>请求中没有使用 ReadableStream 对象。</li></ul><h2 id="附带身份的请求与通配符" tabindex="-1"><a class="header-anchor" href="#附带身份的请求与通配符"><span>附带身份的请求与通配符</span></a></h2><p>在响应附带身份凭证的请求时：</p><ul><li><p>服务器不能将 <strong>Access-Control-Allow-Origin</strong> 的值设为通配符 <code>*</code>，而应将其设置为特定的域，如：Access-Control-Allow-Origin: <a href="https://pengzhanbo.cn." target="_blank" rel="noopener noreferrer">https://pengzhanbo.cn.</a></p></li><li><p>服务器不能将 <strong>Access-Control-Allow-Headers</strong> 的值设为通配符 <code>*</code>，而应将其设置为首部名称的列表，如：Access-Control-Allow-Headers: X-Custom-Header, Content-Type</p></li><li><p>服务器不能将 <strong>Access-Control-Allow-Methods</strong> 的值设为通配符 <code>*</code>，而应将其设置为特定请求方法名称的列表，如：Access-Control-Allow-Methods: POST, GET</p></li></ul><h2 id="需要cors的场景" tabindex="-1"><a class="header-anchor" href="#需要cors的场景"><span>需要CORS的场景</span></a></h2><ol><li>使用 <strong>XMLHttpRequest</strong> 发起的 HTTP请求</li><li>使用 <strong>Fetch API</strong> 发起的 HTTP 请求</li><li>Web字体，CSS通过 <code>@font-face</code> 使用的跨域字体资源</li><li>WebGL 贴图</li><li>使用 drawImage 将 Images/video 画面绘制到 canvas</li><li>来自图像的 CSS 图形</li></ol><h2 id="安全" tabindex="-1"><a class="header-anchor" href="#安全"><span>安全</span></a></h2><p>在实际的使用场景中，尽可能的少使用 通配符 <code>*</code>，来允许所有域访问，或允许所有自定义首部字段， 这可能在 web 安全上来带风险。</p>`,115)]))}const r=e(n,[["render",o],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/article/2f45bq9x/","title":"跨域资源共享(CORS)","lang":"zh-CN","frontmatter":{"title":"跨域资源共享(CORS)","createTime":"2020/08/29 07:40:31","author":"pengzhanbo","tags":["http"],"permalink":"/article/2f45bq9x/","description":"跨域资源共享（CORS） 是一种基于 HTTP Header 的机制。 该机制通过允许服务器标示除了它自己的 origin（域，协议和端口），使这些 origin 有权限访问加载服务器上的资源。 跨域资源共享 通过 预检请求 的机制，检查服务器是否允许要发送的真实请求。 浏览器向服务器发送一个到服务器托管的跨域资源 预检请求， 在预检请求中，浏览器发送...","head":[["meta",{"property":"og:url","content":"https://wlg.us.kg/article/2f45bq9x/"}],["meta",{"property":"og:site_name","content":"WBlog"}],["meta",{"property":"og:title","content":"跨域资源共享(CORS)"}],["meta",{"property":"og:description","content":"跨域资源共享（CORS） 是一种基于 HTTP Header 的机制。 该机制通过允许服务器标示除了它自己的 origin（域，协议和端口），使这些 origin 有权限访问加载服务器上的资源。 跨域资源共享 通过 预检请求 的机制，检查服务器是否允许要发送的真实请求。 浏览器向服务器发送一个到服务器托管的跨域资源 预检请求， 在预检请求中，浏览器发送..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"http"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"跨域资源共享(CORS)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":7.73,"words":2320},"git":{},"autoDesc":true,"filePathRelative":"blog/8.HTTP/CORS.md","categoryList":[{"id":"126ac9","sort":10000,"name":"blog"},{"id":"f6d5e9","sort":8,"name":"HTTP"}]}');export{r as comp,c as data};
