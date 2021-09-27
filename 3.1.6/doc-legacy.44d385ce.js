System.register(["./vendor-legacy.44d419bd.js"],(function(s){"use strict";var a,n,t;return{setters:[function(s){a=s.e,n=s.o,t=s.G}],execute:function(){const p={class:"markdown-body"},l=[t('<h1>CricleProgress 进度条</h1><h3>介绍</h3><p>展示操作或任务的当前进度。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">//vue</span>\n<span class="hljs-keyword">import</span> { CirecleProgress } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">//taro</span>\n<span class="hljs-keyword">import</span> { CirecleProgress } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(CirecleProgress);\n\n</code></pre><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-circleprogress</span> <span class="hljs-attr">progress</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-circleprogress</span>&gt;</span>\n</code></pre><h3>环形进度条自定义样式</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-circleprogress</span> <span class="hljs-attr">progress</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:progress-option</span>=<span class="hljs-string">&quot;progressOption&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-circleprogress</span>&gt;</span>\n</code></pre><h3>环形进度条自定义内容</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-circleprogress</span> <span class="hljs-attr">progress</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:is-auto</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-circleprogress</span>&gt;</span>\n</code></pre><h3>动态改变环形进度条的进度</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">nut-circleprogress</span> <span class="hljs-attr">:progress</span>=<span class="hljs-string">&quot;percent&quot;</span> <span class="hljs-attr">:progress-option</span>=<span class="hljs-string">&quot;progressOption&quot;</span> <span class="hljs-attr">:stroke-inner-width</span>=<span class="hljs-string">&quot;strokeInnerWidth&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-circleprogress</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;setReduceVal&quot;</span> &gt;</span>减少<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;setAddVal&quot;</span>&gt;</span>增加<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"> <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> progressOption = reactive({\n      <span class="hljs-attr">radius</span>: <span class="hljs-number">50</span>,\n      <span class="hljs-attr">strokeOutWidth</span>: <span class="hljs-number">10</span>,\n      <span class="hljs-attr">backColor</span>: <span class="hljs-string">&#39;#d9d9d9&#39;</span>,\n      <span class="hljs-attr">progressColor</span>: <span class="hljs-string">&#39;red&#39;</span>\n    });\n    <span class="hljs-keyword">const</span> percent = ref(<span class="hljs-number">50</span>);\n    <span class="hljs-keyword">const</span> strokeInnerWidth = ref(<span class="hljs-number">10</span>);\n    <span class="hljs-keyword">const</span> isAuto = ref(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">const</span> setAddVal = <span class="hljs-function">() =&gt;</span> {\n      strokeInnerWidth.value = <span class="hljs-number">10</span>;\n      <span class="hljs-keyword">if</span> (percent.value &gt;= <span class="hljs-number">100</span>) {\n        <span class="hljs-keyword">return</span>;\n      }\n      percent.value += <span class="hljs-number">10</span>;\n    };\n    <span class="hljs-keyword">const</span> setReduceVal = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">if</span> (percent.value - <span class="hljs-number">10</span> &lt;= <span class="hljs-number">0</span>) {\n        strokeInnerWidth.value = <span class="hljs-number">0</span>;\n        percent.value = <span class="hljs-number">0</span>;\n        <span class="hljs-keyword">return</span>;\n      }\n      percent.value -= <span class="hljs-number">10</span>;\n    };\n    <span class="hljs-keyword">return</span> {\n      progressOption,\n      isAuto,\n      setAddVal,\n      setReduceVal,\n      percent\n    };\n  }\n</code></pre><h2>Prop</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>progress</td><td>百分比</td><td>Number,String</td><td>必传项，无默认值</td></tr><tr><td>stroke-inner-width</td><td>圆弧的宽度</td><td>Number,String</td><td>10</td></tr><tr><td>is-auto</td><td>是否自定义内容显示（taro暂不支持）</td><td>Boolean</td><td>false</td></tr><tr><td>progress-option</td><td>外圆相关参数对象,其中包括半径，宽度，背景颜色，进度色值</td><td>Object</td><td>{radius: 50,strokeOutWidth: 10, backColor: ‘#d9d9d9’,progressColor: ‘red’}</td></tr></tbody></table>',16)];s("default",{setup:(s,{expose:t})=>(t({frontmatter:{}}),(s,t)=>(n(),a("div",p,l)))})}}}));
