System.register(["./vendor-legacy.44d419bd.js"],(function(s){"use strict";var t,a,n;return{setters:[function(s){t=s.e,a=s.o,n=s.G}],execute:function(){const l={class:"markdown-body"},p=[n('<h1>Toast 吐司</h1><h3>介绍</h3><p>用于轻提示。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { Toast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Toast);\n</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-toast</span> <span class="hljs-attr">:msg</span>=<span class="hljs-string">&quot;page.state.msg&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;page.state.show&quot;</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;page.state.type&quot;</span> @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;page.methods.onClosed&quot;</span> <span class="hljs-attr">:cover</span>=<span class="hljs-string">&quot;page.state.cover&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Text 文字提示&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;text&#39;,&#39;网络失败，请稍后再试~&#39;)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Success 成功提示&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;success&#39;,&#39;成功提示&#39;)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Error 失败提示&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;fail&#39;,&#39;失败提示&#39;)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Warning 警告提示&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;warn&#39;,&#39;警告提示&#39;)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Loading 加载提示&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;loading&#39;,&#39;加载中&#39;)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Loading 带白色背景遮罩&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;page.methods.openToast(&#39;loading&#39;,&#39;加载中&#39;,true)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> page = {\n      <span class="hljs-attr">state</span>: reactive({\n        <span class="hljs-attr">msg</span>: <span class="hljs-string">&#39;toast&#39;</span>,\n        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;text&#39;</span>,\n        <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">cover</span>: <span class="hljs-literal">false</span>\n      }),\n      <span class="hljs-attr">methods</span>: {\n        <span class="hljs-attr">openToast</span>: <span class="hljs-function">(<span class="hljs-params">type: string, msg: string, cover: boolean = <span class="hljs-literal">false</span></span>) =&gt;</span> {\n          page.state.show = <span class="hljs-literal">true</span>;\n          page.state.msg = msg;\n          page.state.type = type;\n          page.state.cover = cover;\n        },\n        <span class="hljs-attr">onClosed</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;closed&#39;</span>)\n      }\n    };\n    <span class="hljs-keyword">return</span> {\n      page\n    };\n  }\n};\n</code></pre><h3>基本用法</h3><h3>API</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>Toast.text</td><td>展示文字提示</td><td>options/message</td><td>toast 实例</td></tr><tr><td>Toast.success</td><td>展示成功提示</td><td>options/message</td><td>toast 实例</td></tr><tr><td>Toast.fail</td><td>展示失败提示</td><td>options/message</td><td>toast 实例</td></tr><tr><td>Toast.warn</td><td>展示警告提示</td><td>options/message</td><td>toast 实例</td></tr><tr><td>Toast.hide</td><td>关闭提示</td><td>force:boolean</td><td>void</td></tr><tr><td>Toast.loading</td><td>展示加载提示</td><td>options/message</td><td>toast 实例</td></tr></tbody></table><h2>Props</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>msg</td><td>消息文本内容,支持传入HTML</td><td>String/VNode</td><td>“”</td></tr><tr><td>duration</td><td>展示时长（毫秒）<br>值为 0 时，toast 不会自动消失（loading类型默认为0）</td><td>Number</td><td>2000</td></tr><tr><td>center</td><td>是否展示在页面中部（为false时展示在底部）</td><td>Boolean</td><td>true</td></tr><tr><td>bottom</td><td>距页面底部的距离（像素），center为false时生效</td><td>Number</td><td>30</td></tr><tr><td>text-align-center</td><td>多行文案是否居中</td><td>Boolean</td><td>true</td></tr><tr><td>bg-color</td><td>背景颜色（透明度）</td><td>String</td><td>“rgba(0, 0, 0, 0.8)”</td></tr><tr><td>custom-class</td><td>自定义类名</td><td>String</td><td>“”</td></tr><tr><td>icon</td><td>自定义图标，<strong>对应icon组件，支持图片链接</strong></td><td>String</td><td>“”</td></tr><tr><td>size</td><td>文案尺寸，<strong>small</strong>/<strong>base</strong>/<strong>large</strong>三选一</td><td>String</td><td>“base”</td></tr><tr><td>cover</td><td>是否显示遮罩层，loading类型默认显示</td><td>Boolean</td><td>loading类型true/其他类型false</td></tr><tr><td>cover-color</td><td>遮罩层颜色，默认透明</td><td>String</td><td>“rgba(0,0,0,0)”</td></tr><tr><td>loading-rotate</td><td>loading图标是否旋转，仅对loading类型生效</td><td>Boolean</td><td>true</td></tr><tr><td>on-close</td><td>关闭时触发的事件</td><td>function</td><td>null</td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭提示</td><td>Boolean</td><td>false</td></tr><tr><td>toast-style</td><td>提示框style</td><td>object</td><td>{}</td></tr><tr><td>toast-class</td><td>提示框class</td><td>String</td><td>“”</td></tr></tbody></table>',12)];s("default",{setup:(s,{expose:n})=>(n({frontmatter:{}}),(s,n)=>(a(),t("div",l,p)))})}}}));
