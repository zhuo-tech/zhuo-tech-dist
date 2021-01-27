(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{520:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"集成说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成说明"}},[t._v("#")]),t._v(" 集成说明")]),t._v(" "),a("h3",{attrs:{id:"术语说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#术语说明"}},[t._v("#")]),t._v(" 术语说明")]),t._v(" "),a("ul",[a("li",[t._v("宿主项目： 即 iOS 原生项目(Swift)")]),t._v(" "),a("li",[t._v("Flutter Module：即本项目代码，是 Flutter 实现的代码模块，可以做为一个模块集成到宿主项目当中，我们放在一个单独的代码仓库中")])]),t._v(" "),a("h3",{attrs:{id:"安装-flutter-环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-flutter-环境"}},[t._v("#")]),t._v(" 安装 Flutter 环境")]),t._v(" "),a("p",[t._v("首先，参考 Flutter 官网文档(flutter.dev) 在本地安装 Flutter 环境；")]),t._v(" "),a("h3",{attrs:{id:"初始化-flutter-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化-flutter-项目"}},[t._v("#")]),t._v(" 初始化 Flutter 项目")]),t._v(" "),a("p",[t._v("在 Flutter 项目目录下运行命令对 Flutter Module 进行初始化：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("flutter pub get\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"配置-podfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-podfile"}},[t._v("#")]),t._v(" 配置 Podfile")]),t._v(" "),a("p",[t._v("修改宿主项目根目录下的 "),a("code",[t._v("/Podfile")]),t._v(" 如下：")]),t._v(" "),a("div",{staticClass:"language-pod line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Uncomment the next line to define a global platform for your project\nplatform :ios, '9.0'\ninhibit_all_warnings!\nsource 'https://cdn.cocoapods.org/'\n\n# 修改为 Flutter Module 项目在你本地的相对目录\nflutter_application_path = '../feixuan_flutter'\nload File.join(flutter_application_path, '.ios', 'Flutter', 'podhelper.rb')\n\ntarget 'FeiXuan' do\n\tuse_frameworks!\n   \tpod 'RxSwift', '5.1.1'\n    pod 'RxCocoa', '5.1.0'\n    pod 'RxDataSources', '4.0.1'\n    pod 'Alamofire', '4.9.1'\n    pod 'ObjectMapper', '3.5.2'\n    pod 'ZYBannerView', '= 1.1.4'\n    pod 'MGJRouter', '0.10.0'\n    pod 'MJRefresh', '3.2.0'\n    pod 'SVProgressHUD', '2.2.5'\n    pod 'WechatOpenSDK', '= 1.8.7'\n    pod 'SnapKit', '4.2.0'\n    pod 'Bugly', '2.5.2'\n    pod 'MBProgressHUD', '= 1.1.0'\n    \n    # install flutter module\n    install_all_flutter_pods(flutter_application_path)\nend\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br")])]),a("h3",{attrs:{id:"更新-pod-依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新-pod-依赖"}},[t._v("#")]),t._v(" 更新 pod 依赖")]),t._v(" "),a("p",[t._v("在宿主项目中运行 "),a("code",[t._v("pod install")]),t._v(" 更新依赖：")]),t._v(" "),a("h3",{attrs:{id:"添加-myflutterviewcontroller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-myflutterviewcontroller"}},[t._v("#")]),t._v(" 添加 MyFlutterViewController")]),t._v(" "),a("p",[t._v("将 "),a("code",[t._v("MyFlutterViewController.swift")]),t._v(" 文件，添加至宿主项目中的目录： "),a("code",[t._v("/FeiXuan/FeiFlutterViewController.swift")])]),t._v(" "),a("blockquote",[a("p",[t._v("提示：与 "),a("code",[t._v("AppDelegate.swift")]),t._v(" 同目录；")])]),t._v(" "),a("h3",{attrs:{id:"添加页面跳转代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加页面跳转代码"}},[t._v("#")]),t._v(" 添加页面跳转代码")]),t._v(" "),a("p",[t._v("在宿主项目的相应位置添加[打开 Flutter 页面]的代码（如用户点击收藏夹时，跳转 Flutter 页面）：")]),t._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 点击以下两个控件分别跳转到 收藏夹 和 浏览足迹页面")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@IBOutlet")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("weak")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" collectionWrapView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIView")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@IBOutlet")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("weak")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" browseTraceWrapView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIView")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给上面两个控件添加点击事件回调")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collectionWrapView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addGestureRecognizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UITapGestureRecognizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  #"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openCollectionPage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("browseTraceWrapView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addGestureRecognizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UITapGestureRecognizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  #"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openBrowseTracePage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件回调函数：打开收藏夹页面")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@objc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openCollectionPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sender "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UITapGestureRecognizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" controller "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("FeiFlutterViewController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialRoute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("FeiFlutterViewController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PAGE_COLLECTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigationController"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushViewController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" animated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件回调函数：打开浏览足迹页面")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@objc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openBrowseTracePage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sender "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UITapGestureRecognizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" controller "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("FeiFlutterViewController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialRoute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("FeiFlutterViewController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PAGE_BROWSE_TRACE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigationController"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushViewController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" animated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])]),a("h3",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("blockquote",[a("p",[t._v("暂无")])])])}),[],!1,null,null,null);s.default=e.exports}}]);