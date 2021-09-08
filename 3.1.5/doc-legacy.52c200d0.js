System.register(["./vendor-legacy.01386dd6.js"],(function(s){"use strict";var a,n,t;return{setters:[function(s){a=s.e,n=s.o,t=s.G}],execute:function(){const l={class:"markdown-body"},p=[t('<h1>Address 地址</h1><h3>介绍</h3><p>按需加载请加载对应依赖组件 Icon Popup Elevator</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">//vue</span>\n<span class="hljs-keyword">import</span> { Address, Popup, Elevator } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">//taro</span>\n<span class="hljs-keyword">import</span> { Address, Popup, Elevator } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Address);\napp.use(Popup);\napp.use(Elevator);\n\n</code></pre><h2>代码演示</h2><h3>选择自定义地址</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择地址&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showAddress&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-address</span>\n    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;showPopup&quot;</span>\n    <span class="hljs-attr">:province</span>=<span class="hljs-string">&quot;province&quot;</span>\n    <span class="hljs-attr">:city</span>=<span class="hljs-string">&quot;city&quot;</span>\n    <span class="hljs-attr">:country</span>=<span class="hljs-string">&quot;country&quot;</span>\n    <span class="hljs-attr">:town</span>=<span class="hljs-string">&quot;town&quot;</span>\n    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>\n    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>\n    <span class="hljs-attr">custom-address-title</span>=<span class="hljs-string">&quot;请选择所在地区&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-address</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> showPopup = ref(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> address = reactive({\n      <span class="hljs-attr">province</span>:[\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;北京&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;广西&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;江西&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;四川&#39;</span> }\n      ],\n      <span class="hljs-attr">city</span>:[\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;朝阳区&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;崇文区&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;昌平区&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;石景山区&#39;</span> }\n      ],\n      <span class="hljs-attr">country</span>:[\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;八里庄街道&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;北苑&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;常营乡&#39;</span> }\n      ],\n      <span class="hljs-attr">town</span>:[]\n    })\n\n    <span class="hljs-keyword">const</span> text = ref(<span class="hljs-string">&#39;请选择地址&#39;</span>)\n\n    <span class="hljs-keyword">const</span> showAddress = <span class="hljs-function">() =&gt;</span> {\n      showPopup.value = !showPopup.value;\n    };\n\n    <span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">cal</span>) =&gt;</span> {\n      <span class="hljs-keyword">const</span> name = address[cal.next]\n      <span class="hljs-keyword">if</span> (name.length &lt; <span class="hljs-number">1</span>) {\n        showPopup.value = <span class="hljs-literal">false</span>;\n      }\n    };\n    <span class="hljs-keyword">const</span> close = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(val);\n      text.value = val.data.addressStr;\n    };\n\n    <span class="hljs-keyword">return</span> { showPopup, text, showAddress, onChange, close, ...toRefs(address) };\n}\n</code></pre><h3>选择自定义地址2</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择地址&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;custom2&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showAddress&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-address</span>\n    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;showPopup&quot;</span>\n    <span class="hljs-attr">:province</span>=<span class="hljs-string">&quot;province&quot;</span>\n    <span class="hljs-attr">:city</span>=<span class="hljs-string">&quot;city&quot;</span>\n    <span class="hljs-attr">:country</span>=<span class="hljs-string">&quot;country&quot;</span>\n    <span class="hljs-attr">:town</span>=<span class="hljs-string">&quot;town&quot;</span>\n    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>\n    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>\n    <span class="hljs-attr">custom-address-title</span>=<span class="hljs-string">&quot;请选择所在地区&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-address</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> showPopup = ref(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> address = reactive({\n      <span class="hljs-attr">province</span>:[\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;北京&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;广西&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;江西&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;四川&#39;</span> }\n      ],\n      <span class="hljs-attr">city</span>:[\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;朝阳区&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;崇文区&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;昌平区&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;石景山区&#39;</span> }\n      ],\n      <span class="hljs-attr">country</span>:[\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;八里庄街道&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;北苑&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;常营乡&#39;</span> }\n      ],\n      <span class="hljs-attr">town</span>:[]\n    })\n\n    <span class="hljs-keyword">const</span> text = ref(<span class="hljs-string">&#39;请选择地址&#39;</span>)\n\n    <span class="hljs-keyword">const</span> showAddress = <span class="hljs-function">() =&gt;</span> {\n      showPopup.value = !showPopup.value;\n    };\n\n    <span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">cal</span>) =&gt;</span> {\n      <span class="hljs-keyword">const</span> name = address[cal.next]\n      <span class="hljs-keyword">if</span> (name.length &lt; <span class="hljs-number">1</span>) {\n        showPopup.value = <span class="hljs-literal">false</span>;\n      }\n    };\n    <span class="hljs-keyword">const</span> close = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(val);\n      text.value = val.data.addressStr;\n    };\n\n    <span class="hljs-keyword">return</span> { showPopup, text, showAddress, onChange, close, ...toRefs(address) };\n}\n</code></pre><h3>选择已有地址</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择地址&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showAddressExist&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-address</span>\n    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;showPopupExist&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;exist&quot;</span>\n    <span class="hljs-attr">:exist-address</span>=<span class="hljs-string">&quot;existAddress&quot;</span>\n    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>\n    <span class="hljs-attr">:is-show-custom-address</span>=<span class="hljs-string">&quot;false&quot;</span>\n    @<span class="hljs-attr">selected</span>=<span class="hljs-string">&quot;selected&quot;</span>\n    <span class="hljs-attr">exist-address-title</span>=<span class="hljs-string">&quot;配送至&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-address</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> showPopupExist = ref(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> existAddress = ref([\n      {\n        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,\n        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;th &#39;</span>,\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;石景山区&#39;</span>,\n        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;城区&#39;</span>,\n        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;北京&#39;</span>,\n        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">true</span>,\n        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>\n      },{\n        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,\n        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;12_ &#39;</span>,\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;电饭锅&#39;</span>,\n        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;扶绥县&#39;</span>,\n        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;北京&#39;</span>,\n        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>\n      },{\n        <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,\n        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;发大水比 &#39;</span>,\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;放到&#39;</span>,\n        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;广宁街道&#39;</span>,\n        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;钓鱼岛全区&#39;</span>,\n        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>\n      },{\n        <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,\n        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;还是想吧百度吧 &#39;</span>,\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;研发&#39;</span>,\n        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;八里庄街道&#39;</span>,\n        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;北京&#39;</span>,\n        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>\n      }\n    ]);\n\n    <span class="hljs-keyword">const</span> text = ref(<span class="hljs-string">&#39;请选择地址&#39;</span>)\n\n    <span class="hljs-keyword">const</span> showAddressExist = <span class="hljs-function">() =&gt;</span> {\n      showPopupExist.value = <span class="hljs-literal">true</span>;\n    };\n\n    <span class="hljs-keyword">const</span> close = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {\n      <span class="hljs-keyword">if</span> (val.type == <span class="hljs-string">&#39;exist&#39;</span>) {\n        <span class="hljs-keyword">const</span> {provinceName,cityName,countyName,townName,addressDetail} = val.data\n        text.value = provinceName + cityName + countyName + townName + addressDetail;\n      } <span class="hljs-keyword">else</span> {\n        text.value = val.data.addressStr;\n      }\n    };\n\n    <span class="hljs-keyword">const</span> selected = <span class="hljs-function">(<span class="hljs-params">prevExistAdd, nowExistAdd, arr</span>) =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(prevExistAdd);\n      <span class="hljs-built_in">console</span>.log(nowExistAdd);\n    };\n\n    <span class="hljs-keyword">return</span> { showPopupExist, existAddress, showAddressExist, text, close, selected };\n}\n</code></pre><h3>自定义图标</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择地址&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showCustomImg&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-address</span>\n    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;showPopupCustomImg&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;exist&quot;</span>\n    <span class="hljs-attr">:existAddress</span>=<span class="hljs-string">&quot;existAddress&quot;</span>\n    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>\n    <span class="hljs-attr">:is-show-custom-address</span>=<span class="hljs-string">&quot;false&quot;</span>\n    @<span class="hljs-attr">selected</span>=<span class="hljs-string">&quot;selected3&quot;</span>\n    <span class="hljs-attr">:default-icon</span>=<span class="hljs-string">&quot;defaultIcon&quot;</span>\n    <span class="hljs-attr">:selected-icon</span>=<span class="hljs-string">&quot;selectedIcon&quot;</span>\n    <span class="hljs-attr">:close-btn-icon</span>=<span class="hljs-string">&quot;closeBtnIcon&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-address</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> showPopupCustomImg = ref(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> icon = reactive({\n      <span class="hljs-attr">selectedIcon</span>: <span class="hljs-string">&#39;heart-fill&#39;</span>,\n      <span class="hljs-attr">defaultIcon</span>: <span class="hljs-string">&#39;heart1&#39;</span>,\n      <span class="hljs-attr">closeBtnIcon</span>: <span class="hljs-string">&#39;close&#39;</span>,\n      <span class="hljs-attr">backBtnIcon</span>: <span class="hljs-string">&#39;left&#39;</span>\n    });\n    <span class="hljs-keyword">const</span> existAddress = ref([\n      {\n        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,\n        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;th &#39;</span>,\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;石景山区&#39;</span>,\n        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;城区&#39;</span>,\n        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;北京&#39;</span>,\n        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">true</span>,\n        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>\n      },{\n        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,\n        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;12_ &#39;</span>,\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;电饭锅&#39;</span>,\n        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;扶绥县&#39;</span>,\n        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;北京&#39;</span>,\n        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>\n      },{\n        <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,\n        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;发大水比 &#39;</span>,\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;放到&#39;</span>,\n        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;广宁街道&#39;</span>,\n        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;钓鱼岛全区&#39;</span>,\n        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>\n      },{\n        <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,\n        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;还是想吧百度吧 &#39;</span>,\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;研发&#39;</span>,\n        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;八里庄街道&#39;</span>,\n        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;北京&#39;</span>,\n        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>\n      }\n    ]);\n\n    <span class="hljs-keyword">const</span> text = ref(<span class="hljs-string">&#39;请选择地址&#39;</span>)\n\n    <span class="hljs-keyword">const</span> showCustomImg = <span class="hljs-function">() =&gt;</span> {\n      showPopupCustomImg.value = <span class="hljs-literal">true</span>;\n    };\n\n    <span class="hljs-keyword">const</span> close = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {\n      <span class="hljs-keyword">if</span> (val.type == <span class="hljs-string">&#39;exist&#39;</span>) {\n        <span class="hljs-keyword">const</span> {provinceName,cityName,countyName,townName,addressDetail} = val.data\n        text.value = provinceName + cityName + countyName + townName + addressDetail;\n      } <span class="hljs-keyword">else</span> {\n        text.value = val.data.addressStr;\n      }\n    };\n\n    <span class="hljs-keyword">const</span> selected = <span class="hljs-function">(<span class="hljs-params">prevExistAdd, nowExistAdd, arr</span>) =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(prevExistAdd);\n      <span class="hljs-built_in">console</span>.log(nowExistAdd);\n    };\n\n    <span class="hljs-keyword">return</span> { showPopupCustomImg, existAddress, text, showCustomImg, close, selected, ...toRefs(icon) };\n}\n</code></pre><h3>自定义地址与已有地址切换</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择地址&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showAddressOther&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-address</span>\n    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;showPopupOther&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;exist&quot;</span>\n    <span class="hljs-attr">:exist-address</span>=<span class="hljs-string">&quot;existAddress&quot;</span>\n    <span class="hljs-attr">:province</span>=<span class="hljs-string">&quot;province&quot;</span>\n    <span class="hljs-attr">:city</span>=<span class="hljs-string">&quot;city&quot;</span>\n    <span class="hljs-attr">:country</span>=<span class="hljs-string">&quot;country&quot;</span>\n    <span class="hljs-attr">:town</span>=<span class="hljs-string">&quot;town&quot;</span>\n    <span class="hljs-attr">:back-btn-icon</span>=<span class="hljs-string">&quot;backBtnIcon&quot;</span>\n    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>\n    @<span class="hljs-attr">selected</span>=<span class="hljs-string">&quot;selected&quot;</span>\n    <span class="hljs-attr">custom-and-exist-title</span>=<span class="hljs-string">&quot;选择其他地址&quot;</span>\n    @<span class="hljs-attr">switch-module</span>=<span class="hljs-string">&quot;switchModule&quot;</span>\n    @<span class="hljs-attr">close-mask</span>=<span class="hljs-string">&quot;closeMask&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-address</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> showPopupOther = ref(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> address = reactive({\n      <span class="hljs-attr">province</span>:[\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;北京&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;广西&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;江西&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;四川&#39;</span> }\n      ],\n      <span class="hljs-attr">city</span>:[\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;朝阳区&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;崇文区&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;昌平区&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;石景山区&#39;</span> }\n      ],\n      <span class="hljs-attr">country</span>:[\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;八里庄街道&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;北苑&#39;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;常营乡&#39;</span> }\n      ],\n      <span class="hljs-attr">town</span>:[]\n    })\n    <span class="hljs-keyword">const</span> existAddress = ref([\n      {\n        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,\n        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;th &#39;</span>,\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;石景山区&#39;</span>,\n        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;城区&#39;</span>,\n        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;北京&#39;</span>,\n        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">true</span>,\n        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>\n      },\n      {\n        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,\n        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;12_ &#39;</span>,\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;电饭锅&#39;</span>,\n        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;扶绥县&#39;</span>,\n        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;北京&#39;</span>,\n        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>\n      },\n      {\n        <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,\n        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;发大水比 &#39;</span>,\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;放到&#39;</span>,\n        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;广宁街道&#39;</span>,\n        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;钓鱼岛全区&#39;</span>,\n        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>\n      },\n      {\n        <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,\n        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;还是想吧百度吧 &#39;</span>,\n        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;研发&#39;</span>,\n        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;八里庄街道&#39;</span>,\n        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;北京&#39;</span>,\n        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,\n        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>\n      }\n    ]);\n    <span class="hljs-keyword">const</span> backBtnIcon = ref(<span class="hljs-string">&#39;left&#39;</span>)\n    <span class="hljs-keyword">const</span> text = ref(<span class="hljs-string">&#39;请选择地址&#39;</span>)\n\n    <span class="hljs-keyword">const</span> showAddressOther = <span class="hljs-function">() =&gt;</span> {\n      showPopupOther.value = <span class="hljs-literal">true</span>;\n    };\n\n    <span class="hljs-keyword">const</span> close = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {\n      <span class="hljs-keyword">if</span> (val.type == <span class="hljs-string">&#39;exist&#39;</span>) {\n        <span class="hljs-keyword">const</span> {provinceName,cityName,countyName,townName,addressDetail} = val.data\n        text.value = provinceName + cityName + countyName + townName + addressDetail;\n      } <span class="hljs-keyword">else</span> {\n        text.value = val.data.addressStr;\n      }\n    };\n\n    <span class="hljs-keyword">const</span> selected = <span class="hljs-function">(<span class="hljs-params">prevExistAdd, nowExistAdd, arr</span>) =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(prevExistAdd);\n      <span class="hljs-built_in">console</span>.log(nowExistAdd);\n    };\n\n    <span class="hljs-keyword">const</span> switchModule = <span class="hljs-function"><span class="hljs-params">cal</span> =&gt;</span> {\n      <span class="hljs-keyword">if</span> (cal.type == <span class="hljs-string">&#39;custom&#39;</span>) {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;点击了“选择其他地址”按钮&#39;</span>);\n      } <span class="hljs-keyword">else</span> {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;点击了自定义地址左上角的返回按钮&#39;</span>);\n      }\n    };\n\n    <span class="hljs-keyword">const</span> closeMask = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;关闭弹层&#39;</span>, val);\n    };\n\n    <span class="hljs-keyword">return</span> { showPopupOther, text, showAddressOther, switchModule, closeMask, close, selected, backBtnIcon, ...toRefs(address) };\n}\n</code></pre><h1>API</h1><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>是否打开地址选择</td><td>String</td><td>‘’</td></tr><tr><td>type</td><td>地址选择类型 exist/custom/custom2</td><td>String</td><td>‘custom’</td></tr><tr><td>province</td><td>省，每个省的对象中，必须有 name 字段</td><td>Array</td><td>[]</td></tr><tr><td>city</td><td>市，每个市的对象中，必须有 name 字段</td><td>Array</td><td>[]</td></tr><tr><td>country</td><td>县，每个县的对象中，必须有 name 字段</td><td>Array</td><td>[]</td></tr><tr><td>town</td><td>乡/镇，每个乡/镇的对象中，必须有 name 字段</td><td>Array</td><td>[]</td></tr><tr><td>height</td><td>弹层中内容容器的高度，仅在type=&quot;custom2&quot;时有效</td><td>String、Number</td><td>‘200px’</td></tr><tr><td>exist-address</td><td>已存在地址列表，每个地址对象中，必传值provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解释见下）</td><td>Array</td><td>[]</td></tr><tr><td>default-icon</td><td>已有地址列表默认图标，type=‘exist’ 时生效</td><td>String</td><td>‘’</td></tr><tr><td>selected-icon</td><td>已有地址列表选中图标，type=‘exist’ 时生效</td><td>String</td><td>‘’</td></tr><tr><td>close-btn-icon</td><td>自定义关闭弹框按钮图标</td><td>string</td><td>-</td></tr><tr><td>back-btn-icon</td><td>自定义地址与已有地址切换时，自定义返回的按钮图标</td><td>String</td><td>-</td></tr><tr><td>is-show-custom-address</td><td>是否可以切换自定义地址选择，type=‘exist’ 时生效</td><td>Boolean</td><td>true</td></tr><tr><td>custom-address-title</td><td>自定义地址选择文案，type=‘custom’ 时生效</td><td>String</td><td>‘请选择所在地区’</td></tr><tr><td>exist-address-title</td><td>已有地址文案 ，type=‘exist’ 时生效</td><td>String</td><td>‘配送至’</td></tr><tr><td>custom-and-exist-title</td><td>自定义地址与已有地址切换按钮文案 ，type=‘exist’ 时生效</td><td>String</td><td>‘选择其他地址’</td></tr></tbody></table><ul><li>provinceName 省的名字</li><li>cityName 市的名字</li><li>countyName 县的名字</li><li>townName 乡/镇的名字</li><li>addressDetail 具体地址</li><li>selectedAddress 字段用于判断当前地址列表的选中项。</li></ul><h2>Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>自定义选择地址时，选择地区时触发</td><td>参考 onChange</td></tr><tr><td>selected</td><td>选择已有地址列表时触发</td><td>参考 selected</td></tr><tr><td>close</td><td>地址选择弹框关闭时触发</td><td>参考 close</td></tr><tr><td>close-mask</td><td>点击遮罩层或点击右上角叉号关闭时触发</td><td>{closeWay:‘mask’/‘cross’}</td></tr><tr><td>switch-module</td><td>点击‘选择其他地址’或自定义地址选择左上角返回按钮触发</td><td>{type:‘exist’/‘custom’/‘custom2’}</td></tr></tbody></table><h2>change 回调参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>可能值</th></tr></thead><tbody><tr><td>custom</td><td>当前点击的行政区域</td><td>province(省) / city(市) / country(县) / town(乡)</td></tr><tr><td>next</td><td>当前点击的行政区域的下一级</td><td>province(省) / city(市) / country(县) / town(乡)</td></tr><tr><td>value</td><td>当前点击的行政区域的值（返回传入的值）</td><td>{}</td></tr></tbody></table><h2>selected 回调参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>可能值</th></tr></thead><tbody><tr><td>第一个参数（prevExistAdd）</td><td>选择前选中的地址</td><td>{}</td></tr><tr><td>第二个参数（nowExistAdd）</td><td>当前选中的地址</td><td>{}</td></tr><tr><td>第三个参数（arr）</td><td>选择完之后的已有地址列表（selectedAddress 值发生改变）</td><td>{}</td></tr></tbody></table><h2>close 回调参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>可能值</th></tr></thead><tbody><tr><td>type</td><td>地址选择类型 exist/custom/custom2</td><td>exist/custom/custom2</td></tr><tr><td>data</td><td>选择地址的值,custom 时，addressStr 为选择的地址组合</td><td>{}</td></tr></tbody></table>',32)];s("default",{setup:(s,{expose:t})=>(t({frontmatter:{}}),(s,t)=>(n(),a("div",l,p)))})}}}));