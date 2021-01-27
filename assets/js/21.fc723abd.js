(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{527:function(s,t,a){"use strict";a.r(t);var e=a(44),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("通过解释说明一个简单的 Node.js 应用的 "),a("code",[s._v("Pipeline")]),s._v(" 示例来介绍 GitLab CI 的工作方式和使用。")]),s._v(" "),a("p",[s._v("其中会重点介绍 GitLab CI 的执行过程，"),a("code",[s._v("Stage")]),s._v(" "),a("code",[s._v("Job")]),s._v(" 等基础概念，以及缓存策略。\n")]),s._v(" "),a("h2",{attrs:{id:"示例定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例定义"}},[s._v("#")]),s._v(" 示例定义")]),s._v(" "),a("p",[s._v("下面是一个简单的 Node.js 应用的 pipeline 定义：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .gitlab-ci.yml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" build\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" test\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" node_modules/\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build_job")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" build\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm version\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm install\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("test_job")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm run test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h2",{attrs:{id:"解释说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解释说明"}},[s._v("#")]),s._v(" 解释说明")]),s._v(" "),a("p",[s._v("逐一介绍一下这几个字段：")]),s._v(" "),a("h3",{attrs:{id:"stages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stages"}},[s._v("#")]),s._v(" stages")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" build\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("stage 定义了 pipeline 的执行步骤，也就是说 stages 是有序执行的。每个 stages 可包括多个 Job，Job 才是 CI Runner 要执行的任务。")]),s._v(" "),a("p",[s._v("上面的 pipeline 包括 build 和 test 两个步骤，先执行完所有 build 阶段的 Job，才会执行 test 阶段的 Job。")]),s._v(" "),a("p",[s._v("如果 build 阶段的 Job 执行失败了，则整个 pipeline 失败并中断执行，不会继续执行 test stage 了。")]),s._v(" "),a("p",[s._v("下面就来介绍什么是 Job.")]),s._v(" "),a("h3",{attrs:{id:"build-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-job"}},[s._v("#")]),s._v(" build_job")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build_job")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" build\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm version\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("code",[s._v("build_job")]),s._v(" 是 Job 的名称，可以自由定义；")]),s._v(" "),a("p",[a("code",[s._v("stage")]),s._v(" 字段指定该 Job 属于 "),a("code",[s._v("build")]),s._v(" 阶段的；")]),s._v(" "),a("p",[a("code",[s._v("script")]),s._v(" 就是自定义的构建脚本了，这里就是简单的 "),a("code",[s._v("npm install")]),s._v("；")]),s._v(" "),a("p",[a("code",[s._v("image")]),s._v(" 这个是指定 "),a("code",[s._v("script")]),s._v(" 脚本的执行环境，它的值应该是一个 Docker 镜像。")]),s._v(" "),a("p",[s._v("Runner 开始执行这个 Job 时，首先会 pull 项目的最新代码，然后基于这个镜像启动一个容器并把代码挂载到容器里，最后在这个容器里面执行 "),a("code",[s._v("script")]),s._v(" 定义的脚本。因为我们这里使用的是 node:10 作为作业的镜像，所以在 "),a("code",[s._v("script")]),s._v(" 里才可以直接用 npm。")]),s._v(" "),a("h3",{attrs:{id:"test-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-job"}},[s._v("#")]),s._v(" test_job")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("test_job")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm run test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("test_job")]),s._v(" 同样是一个 Job，它属于 "),a("code",[s._v("test stage")]),s._v("，在上面的 "),a("code",[s._v("stages")]),s._v(" 定义中 "),a("code",[s._v("test")]),s._v(" 是在 "),a("code",[s._v("build")]),s._v(" 之后的，所以它会等所有 "),a("code",[s._v("build")]),s._v(" 阶段的 Job 执行完之后才会被执行。")]),s._v(" "),a("blockquote",[a("p",[s._v("重点来了：每个 Job 是独立执行的，互相隔离的。 Runner 在执行 "),a("code",[s._v("test_job")]),s._v(" 的时候，会重新 pull 应用的最新代码，然后启动一个新容器并挂载代码，再在里面执行 script 脚本。")])]),s._v(" "),a("p",[s._v("这就会导致一个问题： 在 "),a("code",[s._v("test_job")]),s._v(" 中我们并没有执行 "),a("code",[s._v("npm install")]),s._v(" 就直接执行了 "),a("code",[s._v("npm run test")]),s._v("，理论上会是报错的！")]),s._v(" "),a("p",[s._v("这就要介绍最后一个未介绍的字段 "),a("code",[s._v("cache")]),s._v(".")]),s._v(" "),a("h3",{attrs:{id:"cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache"}},[s._v("#")]),s._v(" cache")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" node_modules/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("cache")]),s._v(" 是 pipeline 中定义 Job 之间的缓存的；")]),s._v(" "),a("p",[s._v("我们这里定义的 "),a("code",[s._v("cache")]),s._v(" 是全局的，即作用于所有 Job 的；")]),s._v(" "),a("p",[a("code",[s._v("paths")]),s._v(" 定义需要缓存的目录，若需要，你可以指定多个；")]),s._v(" "),a("p",[s._v("缓存的逻辑是这样的：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("- 执行 build_job 时会检查之前无有缓存\n- 如果有缓存就下载到 `paths` 指定的缓存目录，无则忽略\n- build_job 执行结束之前，会重新把缓存目录缓存起来\n- test_job 执行之前，同样检查有无缓存，有则下载\n")])])]),a("p",[s._v("所以，test_job 的 script 中没有执行 "),a("code",[s._v("npm install")]),s._v(" 是因为我们将 "),a("code",[s._v("node_modules")]),s._v(" 目录缓存了。")]),s._v(" "),a("p",[s._v("缓存是提高 Job 执行效率的策略，不仅仅是多个 Job 之间；")]),s._v(" "),a("p",[s._v("同一个 Job 在多次 pipeline 中也会共用缓存，意思是：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("- build_job 第一次运行时并没有缓存\n- 下次 pipeline 执行时，npm install 就会基于缓存的 node_modules 更新，而不是全量下载了\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("通过这个示例，基本就了解 GitLab CI 的工作过程和定义方式了；")]),s._v(" "),a("p",[s._v("其中缓存策略是非常常用的，这里使用的是全局缓存，还可以指定某个 Job 特有有缓存策略。")]),s._v(" "),a("p",[s._v("想进一步了解缓存，请查看官方文档关于缓存的详细说明:\nhttps://docs.gitlab.com/ee/ci/yaml/README.html#cache")]),s._v(" "),a("p",[s._v("这个简单的示例，只是展示了 Node.js 应用的构建和测试，一个更完整的 CI 流程通常还会包括 "),a("code",[s._v("部署(deploy)")]),s._v("，接下来会继续通过示例讲解使用 GitLab CI 的更多使用。")])])}),[],!1,null,null,null);t.default=n.exports}}]);