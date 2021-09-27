import{e as t,o as s,G as a}from"./vendor.9cc7b6f2.js";const n={class:"markdown-body"},d=[a('<h1>Uploader 上传</h1><h3>介绍</h3><p>用于将本地的图片或文件上传至服务器。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { Uploader,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Uploader);\napp.use(Icon);\n\n</code></pre><h3>基本用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;http://服务器地址&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>\n</code></pre><h3>自定义上传样式</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;http://服务器地址&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;uploader&quot;</span>&gt;</span>上传文件<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>\n</code></pre><h3>直接调起摄像头（移动端生效）</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;http://服务器地址&quot;</span> <span class="hljs-attr">capture</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>\n</code></pre><h3>限制上传数量5个</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;http://服务器地址&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">maximum</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>\n</code></pre><h3>限制上传大小（每个文件最大不超过 50kb，也可以在beforeupload中自行处理）</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;http://服务器地址&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:maximize</span>=<span class="hljs-string">&quot;1024 * 50&quot;</span> <span class="hljs-attr">:before-upload</span>=<span class="hljs-string">&quot;beforeUpload&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;onOversize&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> formData = {\n      <span class="hljs-attr">custom</span>: <span class="hljs-string">&#39;test&#39;</span>\n    };\n    <span class="hljs-keyword">const</span> onOversize = <span class="hljs-function">(<span class="hljs-params">files: File[]</span>) =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;oversize 触发 文件大小不能超过 50kb&#39;</span>, files);\n    };\n\n    <span class="hljs-keyword">const</span> beforeUpload = <span class="hljs-function">(<span class="hljs-params">files: File[]</span>) =&gt;</span> {\n      <span class="hljs-comment">//自定义处理</span>\n      <span class="hljs-keyword">return</span> files;\n    }\n   \n    <span class="hljs-keyword">return</span> {\n      onOversize,\n      formData\n    };\n}\n</code></pre><h3>自定义 FormData headers</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;http://服务器地址&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">:headers</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">:with-Credentials</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> formData = {\n      <span class="hljs-attr">custom</span>: <span class="hljs-string">&#39;test&#39;</span>\n    };\n    <span class="hljs-keyword">const</span> onOversize = <span class="hljs-function">(<span class="hljs-params">files: File[]</span>) =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;oversize 触发 文件大小不能超过 50kb&#39;</span>, files);\n    };\n   \n    <span class="hljs-keyword">return</span> {\n      onOversize,\n      formData\n    };\n}\n</code></pre><h3>禁用状态</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>\n</code></pre><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td><code>input</code> 标签 <code>name</code> 的名称，发到后台的文件参数名</td><td>String</td><td>“file”</td></tr><tr><td>url</td><td>上传服务器的接口地址</td><td>String</td><td>-</td></tr><tr><td>v-model:file-list</td><td>默认已经上传的文件列表</td><td>FileItem[]</td><td>[]</td></tr><tr><td>is-preview</td><td>是否上传成功后展示预览图</td><td>Boolean</td><td>true</td></tr><tr><td>is-deletable</td><td>是否展示删除按钮</td><td>Boolean</td><td>true</td></tr><tr><td>method</td><td>上传请求的 http method</td><td>String</td><td>“post”</td></tr><tr><td>capture</td><td>图片<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture">选取模式</a>，直接调起摄像头</td><td>String</td><td>false</td></tr><tr><td>maximize</td><td>可以设定最大上传文件的大小（字节）</td><td>Number丨String</td><td>Number.MAX_VALUE</td></tr><tr><td>maximum</td><td>文件上传数量限制</td><td>Number丨String</td><td>1</td></tr><tr><td>clear-input</td><td>是否需要清空<code>input</code>内容，设为<code>true</code>支持重复选择上传同一个文件</td><td>Boolean</td><td>false</td></tr><tr><td>accept</td><td>允许上传的文件类型，<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B">详细说明</a></td><td>String</td><td>*</td></tr><tr><td>headers</td><td>设置上传的请求头部</td><td>Object</td><td>{}</td></tr><tr><td>data</td><td>附加上传的信息 formData</td><td>Object</td><td>{}</td></tr><tr><td>upload-icon</td><td>上传区域<a href="#/icon">图标名称</a>或图片链接</td><td>String</td><td>“photograph”</td></tr><tr><td>upload-icon-size</td><td>上传区域<a href="#/icon">图标尺寸</a>大小，如 <code>20px</code> <code>2em</code> <code>2rem</code></td><td>String or Number</td><td>-</td></tr><tr><td>xhr-state</td><td>接口响应的成功状态（status）值</td><td>Number</td><td>200</td></tr><tr><td>with-credentials</td><td>支持发送 cookie 凭证信息</td><td>Boolean</td><td>fasle</td></tr><tr><td>multiple</td><td>是否支持文件多选</td><td>Boolean</td><td>fasle</td></tr><tr><td>disabled</td><td>是否禁用文件上传</td><td>Boolean</td><td>fasle</td></tr><tr><td>timeout</td><td>超时时间，单位为毫秒</td><td>Number丨String</td><td>1000 * 30</td></tr><tr><td>before-upload</td><td>上传前的函数需要返回一个<code>Promise</code>对象</td><td>Function</td><td>null</td></tr><tr><td>before-delete</td><td>除文件时的回调，返回值为 false 时不移除。支持返回一个 <code>Promise</code> 对象，<code>Promise</code> 对象 resolve(false) 或 reject 时不移除</td><td>Function(file): boolean 丨Promise</td><td>-</td></tr></tbody></table><h3>FileItem</h3><table><thead><tr><th>名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>status</td><td>文件状态值，可选’ready,uploading,success,error,removed’</td><td>“ready”</td></tr><tr><td>uid</td><td>文件的唯一标识</td><td>new Date().getTime().toString()</td></tr><tr><td>name</td><td>文件名称</td><td>“”</td></tr><tr><td>url</td><td>文件路径</td><td>“”</td></tr><tr><td>type</td><td>文件类型</td><td>“image/jpeg”</td></tr><tr><td>formData</td><td>上传所需的data</td><td>new FormData()</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>start</td><td>文件上传开始</td><td>options</td></tr><tr><td>progress</td><td>文件上传的进度</td><td>event,options</td></tr><tr><td>oversize</td><td>文件大小超过限制时触发</td><td>files</td></tr><tr><td>success</td><td>上传成功</td><td>responseText,options</td></tr><tr><td>failure</td><td>上传失败</td><td>responseText,options</td></tr><tr><td>change</td><td>上传文件改变时的状态</td><td>fileList,event</td></tr><tr><td>delete</td><td>文件删除之前的状态</td><td>files,fileList</td></tr></tbody></table>',27)],l={setup:(a,{expose:l})=>(l({frontmatter:{}}),(a,l)=>(s(),t("div",n,d)))};export{l as default};
