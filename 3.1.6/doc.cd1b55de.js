import{e as s,o as a,G as t}from"./vendor.9cc7b6f2.js";const n={class:"markdown-body"},l=[t('<h1>ShortPassword 短密码</h1><h3>介绍</h3><p>短密码输入框，可用于输入密码、短信验证码等</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">//vue</span>\n<span class="hljs-keyword">import</span> { ShortPassword,Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">//taro</span>\n<span class="hljs-keyword">import</span> { ShortPassword,Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(ShortPassword);\napp.use(Popup);\n\n</code></pre><h3>公用片段</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-shortpassword</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value&quot;</span>\n  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.visible&quot;</span>\n  <span class="hljs-attr">:no-button</span>=<span class="hljs-string">&quot;state.noButton&quot;</span>\n  <span class="hljs-attr">:length</span>=<span class="hljs-string">&quot;state.length&quot;</span>\n  <span class="hljs-attr">:error-msg</span>=<span class="hljs-string">&quot;state.errorMsg&quot;</span>\n  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;methods.onChange&quot;</span>\n  @<span class="hljs-attr">complete</span>=<span class="hljs-string">&quot;methods.onComplete&quot;</span>\n  @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;methods.onOk&quot;</span>\n  @<span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;methods.onTips&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-shortpassword</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { reactive, getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">let</span> { proxy } = getCurrentInstance();\n  <span class="hljs-keyword">const</span> state = reactive({\n    <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,\n    <span class="hljs-attr">noButton</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,\n    <span class="hljs-attr">errorMsg</span>: <span class="hljs-string">&#39;&#39;</span>,\n    <span class="hljs-attr">length</span>: <span class="hljs-number">6</span>\n  });\n  <span class="hljs-keyword">const</span> methods = {\n    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">val: string</span>)</span> {\n      val &amp;&amp; proxy.$toast.text(val);\n    },\n    <span class="hljs-function"><span class="hljs-title">onOk</span>(<span class="hljs-params">val: string</span>)</span> {\n      val &amp;&amp; proxy.$toast.text(val);\n      state.visible = <span class="hljs-literal">false</span>;\n    },\n    <span class="hljs-function"><span class="hljs-title">onComplete</span>(<span class="hljs-params"></span>)</span> {\n      \n    },\n    <span class="hljs-function"><span class="hljs-title">onTips</span>(<span class="hljs-params"></span>)</span> {\n      proxy.$toast.text(<span class="hljs-string">&#39;执行忘记密码逻辑&#39;</span>);\n    }\n  };\n  <span class="hljs-keyword">return</span> {\n    state,\n    methods\n  };\n}\n\n</code></pre><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;基础用法&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n</code></pre><h3>显示按钮组</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;显示按钮组&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true;state.noButton = false;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n</code></pre><h3>自定义密码长度4</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;自定义密码长度4&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true;state.length = 4;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n</code></pre><h3>忘记密码提示语事件回调</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;忘记密码提示语事件回调&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n</code></pre><h3>错误提示语</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;错误提示语&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true;state.errorMsg = &#39;请输入正确密码&#39;;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n</code></pre><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>密码初始值</td><td>String</td><td></td></tr><tr><td>v-model:visible</td><td>是否展示短密码框</td><td>Boolean</td><td>false</td></tr><tr><td>title</td><td>标题</td><td>String</td><td>请输入密码</td></tr><tr><td>desc</td><td>密码框描述</td><td>String</td><td>您使用了虚拟资产，请进行验证</td></tr><tr><td>tips</td><td>提示语</td><td>String</td><td>忘记密码</td></tr><tr><td>close-on-click-overlay</td><td>是否点击遮罩关闭</td><td>Boolean</td><td>true</td></tr><tr><td>no-button</td><td>是否隐藏底部按钮</td><td>Boolean</td><td>true</td></tr><tr><td>length</td><td>密码长度，取值为4~6</td><td>String、Number</td><td>6</td></tr><tr><td>error-msg</td><td>错误信息提示</td><td>String</td><td>‘’</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>输入密码时触发事件</td><td>当前输入框值value</td></tr><tr><td>ok</td><td>点击确实时触发事件</td><td>当前输入框值value</td></tr><tr><td>cancel</td><td>点击取消时触发事件</td><td>-</td></tr><tr><td>close</td><td>点击关闭图标时触发事件</td><td>-</td></tr><tr><td>complete</td><td>输入完成的回调</td><td>当前输入框值value</td></tr></tbody></table>',22)],p={setup:(t,{expose:p})=>(p({frontmatter:{}}),(t,p)=>(a(),s("div",n,l)))};export{p as default};
